import Button from "../../General/Button";

const Project = ({ project }) => {
  const openProject = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div className={`project-card ${project.show ? "" : "hide-card"}`}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <Button
        text="View Project"
        onClick={openProject}
        design={`project-btn ${project.show ? "" : "hide-btn"}`}
      />
    </div>
  );
};

Project.defaultProps = {};

export default Project;
