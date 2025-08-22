import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import sendAnimation from "../Animations/Confetti.json";
import helloanimations from "../Animations/hello animation.json";
import insta from "../../Images/instagram_1384063.png";
import github from "../../Images/github_3291695.png";
import linkedin from "../../Images/linkedin_408754.png";
import youtube from "../../Images/you.png";
import twitter from "../../Images/twitter_2504947.png";

export default function Contact() {
  const animationRef = useRef(null);
  const helloRef = useRef(null);
  const [Username, setUsername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [Message, setmessage] = useState("");
  const [error, seterror] = useState("");

  useEffect(() => {
    const helloAnim = Lottie.loadAnimation({
      container: helloRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: helloanimations,
    });

    return () => helloAnim.destroy();
  }, []);

  const handleAnimation = async (e) => {
    e.preventDefault();

    if (
      Username.trim() !== "" &&
      useremail.trim() !== "" &&
      Message.trim() !== ""
    ) {
      try {
        const url = new URL(
          "https://script.google.com/macros/s/AKfycbxNQ24c75awCSeNxPl_OQxtHLdhVTAw2kxzfFqg4JbXnqFTh46AI8q4QvepanPzBnfg/exec"
        );
        url.searchParams.append("name", Username);
        url.searchParams.append("email", useremail);
        url.searchParams.append("message", Message);

        const res = await fetch(url.toString());
        const text = await res.text();

        if (text.trim() !== "Success") throw new Error("Google Script error");

        const anim = Lottie.loadAnimation({
          container: animationRef.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: sendAnimation,
        });

        setTimeout(() => {
          anim.destroy();
        }, 3000);

        setUsername("");
        setuseremail("");
        setmessage("");
        seterror("");
      } catch (err) {
        console.error("Error:", err);
        seterror("Something went wrong while sending your message.");
      }
    } else {
      seterror("Please fill all the fields!");
    }
  };

  return (
    <AnimatedCard delay={100} direction="right">
      <div className="w-full min-w-3xl min-h-[600px] bg-[#0f0c29] flex flex-col lg:flex-row px-4 py-16 items-center justify-center gap-10">
        {/* Form Section */}
        <div className="w-full max-w-[400px] p-6 bg-[#140d33] rounded-xl shadow-xl text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Contact</h1>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Your name</label>
              <input
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name"
                className="bg-[#1a133b] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Your email</label>
              <input
                type="email"
                value={useremail}
                onChange={(e) => setuseremail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#1a133b] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Your message</label>
              <textarea
                rows="5"
                value={Message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Enter your message"
                className="bg-[#1a133b] p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleAnimation}
              className="bg-[#1a133b] text-white py-3 mt-4 font-semibold rounded-md shadow-lg hover:bg-[#2a1f52] transition-all"
            >
              Send message
            </button>
          </form>

          {error && (
            <div className="text-red-600 mt-4 pl-4 text-md transition-all duration-300 hover:-translate-y-1 scale-110 mb-2">
              {error}
            </div>
          )}

          <div
            ref={animationRef}
            className="absolute inset-0 flex justify-center items-center z-50 pointer-events-none"
          />
        </div>

        {/* Social & Animation Section */}
        <div className="flex flex-col items-center gap-6">
          <div ref={helloRef} className="w-[250px] h-[250px] mt-4 lg:mt-10" />

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="https://instagram.com/rehan2003gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition duration-300"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem]"
              />
            </a>

            <a
              href="https://youtube.com/@Code_buddy-v9p"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition duration-300"
            >
              <img
                src={youtube}
                alt="YouTube"
                className="w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem]"
              />
            </a>

            <a
              href="https://github.com/rehan2003gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition duration-300"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem]"
              />
            </a>

            <a
              href="https://linkedin.com/in/rehan-gupta-54374130a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition duration-300"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem]"
              />
            </a>

            <a
              href="https://twitter.com/RehanGupta71830"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition duration-300"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.2rem] md:h-[2.2rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}
