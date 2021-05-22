import Button from "../General/Button";

const Intro = ({ name, designation, onExplore }) => {

  return (
    <div className="intro-page">
      <h1 className="name-title">{name}</h1>
      <h2 className="name-designation">{designation}</h2>
      <Button text="Explore" onClick={onExplore} />
    </div>
  );
};

export default Intro;
