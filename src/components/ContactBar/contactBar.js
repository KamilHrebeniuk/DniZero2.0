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
            rel="noreferrer"
          >
            <img
              className="contactBar-icon"
              src={ico_facebook}
              alt="Facebook"
              rel="noreferrer"
            />
          </a>
        </div>
        <div className="contactBar-element">
          <a
            href="https://www.instagram.com/obozpwr/?hl=pl"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contactBar-icon"
              src={ico_instagram}
              alt="Instagram"
            />
          </a>
        </div>
        <div className="contactBar-element" onClick={() => {navigator.clipboard.writeText("oboz@samorzad.pwr.edu.pl").then(() => {alert("Skopiowano email do schowka")}); }}>
            <img className="contactBar-icon" src={ico_mail} alt="Mail" />
        </div>
      </nav>
    </section>
  );
};

export default ContactBar;
