import Project from "./Project";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({openMenu}) => {
  const [projects] = useState([
    {
      id: 1,
      title: "SMART BOOKMARK, API AND ML MODEL",
      description:
        "An API which can classify website URLs into 10 different categories. The API was made using FastAPI and the model was made in Tensorflow using DistilBert Transformer from Hugging Face.",
      link: "https://github.com/iamyajat/Smart-Bookmark-API",
      show: true,
    },
    {
      id: 2,
      title: "WOMENTECHIES'21 ANDROID APP",
      description:
        "An Android app for the event WomenTechies'21 which can send realtime notifications, show in-app announcements, Instagram highlights and timeline of the event, and other info.",
      link: "https://play.google.com/store/apps/details?id=com.dscvit.wt21",
      show: true,
    },
    {
      id: 3,
      title: "YAZAFIT: BMI & WATER TRACKER",
      description:
        "Developed an Android app to solve the problem of dehydration and weight abnormalities in people by keeping track of their water intake and BMI.",
      link: "https://yazafit.iamyajat.co/",
      show: true,
    },
    {
      id: 4,
      title: "SPACEWEIGHT: YOUR WEIGHT ON OTHER WORLDS",
      description:
        "Developed an Android app to find your weight on other planets, for example, Venus, Jupiter, etc.",
      link: "https://spaceweight.iamyajat.co/",
      show: true,
    },
    {
      id: 5,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
    {
      id: 6,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://github.com/iamyajat"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Projects;
