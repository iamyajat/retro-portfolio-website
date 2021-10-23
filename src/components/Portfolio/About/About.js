import Education from "./Education"
import Info from "./Info"
import Skills from "./Skills"
import ReactTooltip from "react-tooltip";

const About = ({openMenu}) => {
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <Info />
      <Skills />
      <Education />
      <ReactTooltip place="bottom" className="tooltip" />
    </div>
  );
};

export default About;
