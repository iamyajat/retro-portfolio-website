import { useState } from "react";
import About from "./About/About";
import Achievements from "./Achievements/Achievements";
import Blogs from "./Blogs/Blogs";
import Nav from "./Nav";
import Projects from "./Projects/Projects";

const Portfolio = ({ onClose }) => {
  const [page, setPage] = useState("about");
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(!openMenu);
  };

  const changePage = (p) => {
    setPage(p);
  };
  return (
    <>
      <div className="portfolio-card">
        <Nav openMenu={openMenu} onClose={onClose} onChange={changePage} page={page} showMenu={showMenu} />
        {page === "about" ? <About openMenu={openMenu}/> : ""}
        {page === "projects" ? <Projects openMenu={openMenu}/> : ""}
        {page === "blogs" ? <Blogs openMenu={openMenu}/> : ""}
        {page === "achievements" ? <Achievements openMenu={openMenu}/> : ""}
      </div>
    </>
  );
};

export default Portfolio;
