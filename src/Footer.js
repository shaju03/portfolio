import "./Footer.css";
import "boxicons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="contactbox">
          <div className="detail-box">
            <h3>Keep in touch</h3>
            <label className="namelabel" for="name">
              Name
            </label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label for="mobile">Phone No</label>
            <input type="tel" id="mobile" name="mobile" required></input>
          </div>
          <div className="message-box">
            <label for="message">Message</label>
            <div className="msg-box">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here.."
                required
              ></textarea>
            </div>

            <button className="submitbtn" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="inner-footer">
        <div className="footer-main">
          <p className="footer-logo">SHAJU</p>
          <p className="footer-rights">&copy; 2024 ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footer-details">
          <div className="footer-icon">
            <a href="#linkedin">
              <img src="./linkedin.svg" alt="linkedin"></img>
            </a>
            <a href="#instagram">
              <img src="./instagram.svg" alt="instagram"></img>
            </a>
          </div>
          <p className="f-mail">Support: v.shaju03@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
