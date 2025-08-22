import cardImg1 from "../../Images/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon.png";
import cardImg2 from "../../Images/ChatGPT_Image_Aug_2__2025__12_47_13_AM-removebg-preview.png";
import cardImg3 from "../../Images/4380747-removebg-preview.png";
import cardImg4 from "../../Images/5925462-removebg-preview.png";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
//import backgroundVideo from "../../Images/4954759_Coll_halloween_Dusty_6144x3456.mp4";
import Card from "../Card/Card";

function Overview() {
  return (
    <>
      <div
  id="about"
  style={{ background: "linear-gradient(120deg, #1a2a6c, #162d46, #000000)" }}
  className=" relative z-10 min-h-fit pt-12 pb-20 w-full flex flex-col justify-start text-white px-4 sm:px-8"
>
        <AnimatedCard delay={200} direction="bottom">
          <p className="text-2xl sm:text-3xl mt-8 font-medium">Introduction</p>
        </AnimatedCard>

        <AnimatedCard delay={200} direction="bottom">
          <p className="text-4xl sm:text-6xl font-extrabold pt-3">Overview</p>
        </AnimatedCard>

        <AnimatedCard delay={200} direction="bottom">
          <p className="max-w-full mt-5 text-base sm:text-lg text-gray-400 font-medium">
            I am a passionate frontend developer with a strong foundation in
            building responsive, user-friendly web applications using React.js.
            With a keen interest in Data Structures and Algorithms (DSA), I
            continuously strive to write clean, efficient, and optimized code.
            Alongside my frontend expertise, I'm an avid Python enthusiast. I am
            committed to learning, problem-solving, and building solutions that
            merge creativity with technical precision.
          </p>
        </AnimatedCard>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          <AnimatedCard delay={0}>
            <Card
              image={cardImg1}
              description1="Frontend"
              description2="Developer"
            />
          </AnimatedCard>
          <AnimatedCard delay={100}>
            <Card
              image={cardImg2}
              description1="DSA"
              description2="Enthusiast"
            />
          </AnimatedCard>
          <AnimatedCard delay={200}>
            <Card
              image={cardImg3}
              description1="C++"
              description2="Programmer"
            />
          </AnimatedCard>
          <AnimatedCard delay={300}>
            <Card
              image={cardImg4}
              description1="Content"
              description2="Creator"
            />
          </AnimatedCard>
        </div>
      </div>
    </>
  );
}

export default Overview;
