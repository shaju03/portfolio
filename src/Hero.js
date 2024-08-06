import "./Hero.css";
import "boxicons";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-inner">
          <p className="intro-p">Hello People!</p>
          <h1>I'm Shaju</h1>
          <h2>Developer</h2>
          <p className="intro-quote">
            From Code to Creativity: Your Web Development Partner.
          </p>
          <div className="ctabtn">
            <button className="cta-btn-1">Resume</button>
            <button className="cta-btn-2">
              Let's Talk
              <span className="cta-icon">
                <box-icon size="xs" type="solid" name="right-arrow"></box-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="img-tab">
          <div className="top-tap">
            <div className="top-tap-left">
              <div className="color-dot-1 color-dot"></div>
              <div className="color-dot-2 color-dot"></div>
              <div className="color-dot-3 color-dot"></div>
            </div>
            <div className="top-tap-right">
              <p>@im_shaju</p>
            </div>
          </div>
          <div className="hero-img">
            <img src="./portfolio_profile.png" alt="portfolio_profile"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
