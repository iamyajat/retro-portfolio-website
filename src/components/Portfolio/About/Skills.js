import {
  SiPython,
  SiTensorflow,
  SiAndroid,
  SiAndroidstudio,
  SiKotlin,
  SiJava,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const [certifications] = useState([
    "Neural Networks and Deep Learning - deeplearning.ai",
    "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization - deeplearning.ai",
    "Structuring Machine Learning Projects - deeplearning.ai",
    "Convolutional Neural Networks - deeplearning.ai",
    "Introduction to AI - University of Helsinki",
    "Microsoft AI Classroom Series - Microsoft",
    "MATLAB Onramp - MathWorks",
    "Getting Started: Create and Manage Cloud Resources - Qwiklabs",
  ]);

  const [skills] = useState([
    <SiPython data-tip="Python" className="ic-but" />,
    <SiTensorflow data-tip="Tensorflow" className="ic-but" />,
    <SiAndroid data-tip="Android Appdev" className="ic-but" />,
    <SiAndroidstudio data-tip="Android Studio" className="ic-but" />,
    <SiKotlin data-tip="Kotlin" className="ic-but" />,
    <SiJava data-tip="Java" className="ic-but" />,
    <SiHtml5 data-tip="HTML5" className="ic-but" />,
    <SiCss3 data-tip="CSS3" className="ic-but" />,
    <SiJavascript data-tip="JavaScript" className="ic-but" />,
    <SiReact data-tip="React" className="ic-but" />,
    <SiCplusplus data-tip="C++" className="ic-but" />,
    <SiC data-tip="C" className="ic-but" />,
  ]);

  return (
    <div className="skills-card">
      <h1 className="skills-heading">Skills</h1>
      <ul className="list-inline dev-icons">
        {skills.map((skill) => (
          <li className="list-inline-item">{skill}</li>
        ))}
      </ul>
      <br />
      <h1 className="cert-heading">Certifications</h1>
      <ul className="cert-list">
        {certifications.map((certification) => (
          <li className="cert-content">▪ {certification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
