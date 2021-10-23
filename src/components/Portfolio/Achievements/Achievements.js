import { useState } from "react";
const Achievements = ({openMenu}) => {
  const [achievements] = useState([
    "Best Freshers Award at DevSoc (2021).",
    "Overall 2nd Winner at DevSpace (2021).",
    "Winner at HackOff 3.0 in AI/Data Science (2020).",
    "2nd Winner at VIT Hack in Mobility & Automation track with MOVEL AI as the case partner (2020).",
    "Awarded runner up in the Asian level of International Space Settlement Design Competition (2018).",
    "Won a lot of inter-school Tug of War matches (2018-19).",
  ]);
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <div className="skills-card">
        <h1 className="achievements-heading">Achievements</h1>
        <br />
        <ul className="cert-list">
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
