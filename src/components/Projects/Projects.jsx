import Projects_card from '../Projects_cards/Projects_card';
import ProjectscardImg1 from "../../Images/ChatGPT Image Aug 2, 2025, 11_57_58 PM.png";
import ProjectscardImg2 from "../../Images/0_0ZeM4m4ZSgNE6JKd.png";
import ProjectscardImg3 from "../../Images/leetmetrix.png";
import backgroundVideo from "../../Images/4954759_Coll_halloween_Dusty_6144x3456.mp4";
import AnimatedCard from '../AnimatedCard/AnimatedCard';

function Projects() {
  return (
    <>
      <div id="Projects"  className="min-h-[800px]  relative pb-[4rem] px-4 sm:px-8 md:px-12">
        

        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-50 mb-12">
          Projects
        </p>

        <div className="grid grid-cols-2 gap-y-8 md:flex md:flex-wrap md:justify-evenly">
          <AnimatedCard delay={100}>
            <Projects_card
              ProjectsImg={ProjectscardImg1}
              description1="Sorting Visualizer in Python"
              description="Developed a real-time sorting visualizer using Python to demonstrate the internal working of popular sorting algorithms. The tool dynamically visualizes each step of the algorithm using graphical bars, making it easier to understand how data gets sorted over time."
            />
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <Projects_card
              ProjectsImg={ProjectscardImg2}
              description1="Pomofocus APK"
              description="It is a productivity timer app based on the Pomodoro Technique. It features three customizable focus modes — Pomodoro, Short Break, and Long Break — allowing users to manage work sessions effectively. The app includes adjustable time settings, session tracking, and a dark mode also."
            />
          </AnimatedCard>

          <AnimatedCard delay={300}>
            <Projects_card
              ProjectsImg={ProjectscardImg3}
              description1="Leetmetrix"
              description="LeetMetrix is a performance analytics app that fetches real-time user data from LeetCode using the Fetch API. It provides insights like total problems solved, types of questions solved. The app helps users track their coding progress and visualize performance metrics effectively."
            />
          </AnimatedCard>
        </div>
      </div>
    </>
  );
}

export default Projects;
