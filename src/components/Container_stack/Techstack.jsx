import React, { useRef, useEffect } from "react";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import Lottie from "lottie-web";
import figma from "../../Images/figma.png";
import c from "../Animations/c programming animation.json";
import js from "../Animations/Javascript logo.json";
import python from "../Animations/Python logo.json";
import react from "../Animations/React Native Logo.json";
import sql from "../Animations/MySQL.json";
import css from "../Animations/css3.json";
import html from "../../Images/html-removebg-preview.png";
import canava from "../../Images/canva.png";
import cplus from "../../Images/cPLUSPLUS.png";
//import backgroundVideo from "../../Images/4954759_Coll_halloween_Dusty_6144x3456.mp4";
import leetcode from "../../Images/ChatGPT_Image_Aug_2__2025__12_47_13_AM-removebg-preview.png";

function Techstack() {
  const cRef = useRef(null);
  const jsRef = useRef(null);
  const pythonRef = useRef(null);
  const reactRef = useRef(null);
  const sqlRef = useRef(null);
  const cssRef = useRef(null);

  useEffect(() => {
    const anims = [
      { ref: cRef, data: c },
      { ref: jsRef, data: js },
      { ref: pythonRef, data: python },
      { ref: reactRef, data: react },
      { ref: cssRef, data: css },
      { ref: sqlRef, data: sql },
    ];

    const instances = anims.map(({ ref, data }) =>
      Lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: data,
      })
    );

    return () => instances.forEach((anim) => anim.destroy());
  }, []);

  return (
    <div style={{ background: "linear-gradient(120deg, #1a2a6c, #162d46, #000000)" }} className="min-h-[50vh]  flex flex-col  pt-10 relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-50 px-4">
      

      <AnimatedCard delay={100} direction="bottom">
        <p className="pt-10 px-4 sm:text-left">Techstacks</p>
      </AnimatedCard>

      {/* Top Row (Lottie Animated Skills) */}
      <div className="pt-16 flex flex-wrap justify-center gap-8 sm:gap-10 z-10">
        <div ref={cRef} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" />
        <div ref={jsRef} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" />
        <div ref={pythonRef} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" />
        <div ref={reactRef} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" />
        <div ref={sqlRef} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" />
        <div ref={cssRef} className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]" />
      </div>

      {/* Bottom Row (Static Icons) */}
      <div className="pt-12 flex flex-wrap justify-center gap-10 z-10">
        <div className="w-[80px] sm:w-[100px] animate-bounce">
          <img src={html} alt="HTML" className="w-full h-auto" />
        </div>
        <div className="w-[60px] sm:w-[70px] animate-bounce">
          <img src={figma} alt="Figma" className="w-full h-auto" />
        </div>
        <div className="w-[60px] sm:w-[70px] animate-bounce">
          <img src={canava} alt="Canva" className="w-full h-auto" />
        </div>
        <div className="w-[90px] sm:w-[100px] animate-bounce">
          <img src={cplus} alt="C++" className="w-full h-auto" />
        </div>
        <div className="w-[90px] sm:w-[100px] animate-bounce">
          <img src={leetcode} alt="LeetCode" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
