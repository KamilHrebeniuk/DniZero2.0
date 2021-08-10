import { Link } from "react-router-dom";
import ico_facebook from "../../assets/icons/facebook.png";
import ico_instagram from "../../assets/icons/instagram.png";
import ico_mail from "../../assets/icons/mail.png";

const ContactBar = () => {
  return (
    <section>
      <nav className="contactBar">
        <div className="contactBar-element">
          <a
            href="https://www.facebook.com/events/3190446271190442/?active_tab=discussion"
            target="_blank"
          >
            <img
              className="contactBar-icon"
              src={ico_facebook}
              alt="Facebook"
            />
          </a>
        </div>
        <div className="contactBar-element">
          <a href="https://www.instagram.com/obozpwr/?hl=pl" target="_blank">
            <img
              className="contactBar-icon"
              src={ico_instagram}
              alt="Instagram"
            />
          </a>
        </div>
        <div className="contactBar-element">
          <Link to="https://www.facebook.com/events/3190446271190442/?active_tab=discussion">
            <img className="contactBar-icon" src={ico_mail} alt="Facebook" />
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default ContactBar;
