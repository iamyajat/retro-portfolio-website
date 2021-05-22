import Education from "./Education"
import Info from "./Info"
import Skills from "./Skills"
import ReactTooltip from "react-tooltip";

const About = () => {
  return (
    <div className="portfolio-section">
      <Info />
      <Skills />
      <Education />
      <ReactTooltip place="bottom" className="tooltip" />
    </div>
  );
};

export default About;
