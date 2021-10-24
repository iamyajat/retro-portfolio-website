import { FaTimes } from "react-icons/fa";
import Button from "../General/Button";
const Nav = ({ openMenu, onClose, onChange, page, showMenu }) => {
  return (
    <>
      <nav className={`nav-bar menu-open-${openMenu}`}>
        <ul className="nav-links">
          <Button text={"MENU"} onClick={showMenu} design="menu-button" />
          <li
            className={`${page === "about" ? "nav-active" : ""}`}
            onClick={() => onChange("about")}
          >
            <span className={`show-option-${openMenu}`}><h1>About</h1></span>
          </li>
          <li
            className={`${page === "projects" ? "nav-active" : ""}`}
            onClick={() => onChange("projects")}
          >
            <span className={`show-option-${openMenu}`}><h1>Projects</h1></span>
          </li>
          <li
            className={`${page === "blogs" ? "nav-active" : ""}`}
            onClick={() => onChange("blogs")}
          >
            <span className={`show-option-${openMenu}`}><h1>Blogs</h1></span>
          </li>
          <li
            className={`${page === "achievements" ? "nav-active" : ""}`}
            onClick={() => onChange("achievements")}
          >
            <span className={`show-option-${openMenu}`}><h1>Achievements</h1></span>
          </li>
        </ul>
        <FaTimes className="close-btn" onClick={onClose} />
      </nav>
    </>
  );
};

export default Nav;
