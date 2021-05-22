const Education = () => {
  return (
    <div className="education-card">
      <h1>Education</h1>
      <div className="education-info">
        <div className="school-info">
          <h2>VELLORE INSTITUTE OF TECHNOLOGY</h2>
          <p>Vellore, India</p>
          <br />
          <p style={{ "font-weight": "900" }}>
            Computer Science & Engineering
          </p>
          <p>Batch of 2024</p>
          <p>CGPA: 9.68</p>
        </div>
        <div className="school-info">
          <h2>Greenwood High International School</h2>
          <p>Bangalore, India</p>
          <br />
          <p>Batch of 2020</p>
          <p>12th ISC: 95.25%</p>
          <p>10th ICSE: 95%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
