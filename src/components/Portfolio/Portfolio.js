import { useState } from "react";
import About from "./About/About";
import Achievements from "./Achievements/Achievements";
import Blogs from "./Blogs/Blogs";
import Nav from "./Nav";
import Projects from "./Projects/Projects";

const Portfolio = ({ onClose }) => {
  const [page, setPage] = useState("about");
  const changePage = (p) => {
    setPage(p);
  };
  return (
    <>
      <div className="portfolio-card">
        <Nav onClose={onClose} onChange={changePage} page={page} />
        {page === "about" ? <About /> : ""}
        {page === "projects" ? <Projects /> : ""}
        {page === "blogs" ? <Blogs /> : ""}
        {page === "achievements" ? <Achievements /> : ""}
      </div>
    </>
  );
};

export default Portfolio;
