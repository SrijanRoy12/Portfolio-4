import bgImage from "../../Images/5040007.jpg";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

export default function Container() {
  return (
    <>
      <div
        id="home"
        className="bg-cover bg-center bg-no-repeat h-[590px] w-full flex flex-col items-center justify-evenly px-4 py-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="intro-text"
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold transform transition-all w-full duration-700 ease-out text-center"
        >
          <AnimatedCard delay={150} direction="bottom">
            <span className="flex justify-center flex-wrap">
              Hi, I'm{" "}
              <span className="pl-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rehan.
              </span>
            </span>
          </AnimatedCard>

          <p className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-6xl flex justify-center flex-wrap">
            I am a frontend developer,
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl flex justify-center flex-wrap">
            and a <span className="px-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DSA
              </span>enthusiast
          </p>
        </div>
      </div>
    </>
  );
}
