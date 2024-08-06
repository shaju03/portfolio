import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <p>SHAJU</p>
      </div>
      <div className="navCont">
        <ul className="navItems">
          <li>
            <a href="#links">ABOUT</a>
          </li>
          <li>
            <a href="#links">SKILLS</a>
          </li>
          <li>
            <a href="#links">CONTACT</a>
          </li>
        </ul>
        <div className="ctaButton">
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
