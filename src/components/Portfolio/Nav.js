import { FaTimes } from "react-icons/fa";
const Nav = ({ onClose, onChange, page }) => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li
            className={`${page === "about" ? "nav-active" : ""}`}
            onClick={() => onChange("about")}
          >
            <span><h1>About</h1></span>
          </li>
          <li
            className={`${page === "projects" ? "nav-active" : ""}`}
            onClick={() => onChange("projects")}
          >
            <span><h1>Projects</h1></span>
          </li>
          <li
            className={`${page === "blogs" ? "nav-active" : ""}`}
            onClick={() => onChange("blogs")}
          >
            <span><h1>Blogs</h1></span>
          </li>
          <li
            className={`${page === "achievements" ? "nav-active" : ""}`}
            onClick={() => onChange("achievements")}
          >
            <span><h1>Achievements</h1></span>
          </li>
        </ul>
        <FaTimes className="close-btn" onClick={onClose} />
      </nav>
    </>
  );
};

export default Nav;
