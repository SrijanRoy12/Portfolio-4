import Header from "./components/Header/Header";
import Container from "./components/Containers/Containers";
import bgImage from "./Images/5040007.jpg";
import Contact from "./components/Contact/Contact";
import Overview from "./components/Overview/Overview";
import Techstack from "./components/Container_stack/Techstack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Container />
      <svg
        className="absolute blur-2xl z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
      >
        <defs>
          <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#001631" />
            <stop offset="50%" stopColor="#00264d" />
            <stop offset="100%" stopColor="#003d80" />
          </linearGradient>
        </defs>
        <path
          d="M0 0v4l250 64 125-32 250 64 375-96V0H0z"
          fill="url(#navyGradient)"
        />
      </svg>

      <div
        style={{
          background: "linear-gradient(120deg, #1a2a6c, #162d46, #000000)",
        }}
      >
        <Overview />
        <svg
          className="absolute blur-2xl z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
        >
          <defs>
            <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001631" />
              <stop offset="50%" stopColor="#00264d" />
              <stop offset="100%" stopColor="#003d80" />
            </linearGradient>
          </defs>
          <path
            d="M0 0v4l250 64 125-32 250 64 375-96V0H0z"
            fill="url(#navyGradient)"
          />
        </svg>
        <Techstack />
        <Projects />
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default App;
