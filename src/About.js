import "./About.css";
import "boxicons";

function About() {
  return (
    <div className="about">
      <h3>About Me</h3>
      <div className="inner-about">
        <div className="left-about">
          <img src="./about-img.png" alt="about_img"></img>
        </div>
        <div className="right-about">
          <div className="about-head">
            <p className="about-intro">Hi i'm Shaju</p>
          </div>

          <ul className="about-list">
            <li className="about-list-item">
              <span>
                <img src="./icon1.svg" alt="icon1"></img>
              </span>
              Computer Science Engineer
            </li>
            <li className="about-list-item">
              <span>
                <img src="./icon2.svg" alt="icon2"></img>
              </span>
              Designing and Development
            </li>
            <li className="about-list-item">
              <span>
                <img src="./icon3.svg" alt="icon3"></img>
              </span>
              Strong Mindset and Passionate
            </li>
            <li className="about-list-item">
              <span>
                <img src="./icon4.svg" alt="icon4"></img>
              </span>
              Upskill Myself
            </li>
          </ul>

          <div className="about-bottom">
            <p className="about-bottom-date">2023 - Present</p>
            <p className="about-bottom-job">
              <span className="about-bottom-icon">
                <img src="./icon5.svg" alt="icon5"></img>
              </span>
              Game Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
