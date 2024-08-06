import "./Skills.css";
import "boxicons";

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skills-icons">
        <div className="skill-row1">
          <img src="./html.svg" alt="html"></img>
          <img src="./css.svg" alt="css"></img>
          <img src="./js.svg" alt="js"></img>
        </div>
        <div className="skill-row2">
          <img src="./react.svg" alt="react"></img>
          <img src="./tailwind.svg" alt="tailwind"></img>
          <img src="./mysql.svg" alt="mysql"></img>
        </div>
        <div className="skill-row3">
          <img src="./figma.svg" alt="figma"></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
