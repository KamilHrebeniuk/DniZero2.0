import logo from "../../assets/logo.png";

const Counselor = () => {
  const name = "Imionko";
  const picture = logo;
  const number = "123 456 789";

  return (
    <>
      <h2>Witaj, {name}</h2>
      <p>Twój opiekun:</p>
      <img className="guardian-picture" src={picture} alt={name} />
      <p>Imie i Nazwisko: {name}</p>
      <span>Numer telefonu: {number}</span>
      <div className="account-contact">
        <div className="contact">
          <p>Koordynator ds. Uczestników:</p>
          <span> 123456789</span>
        </div>
        <div className="contact">
          <p>Koordynator ds. Programu: </p>
          <span> 123456789</span>
        </div>
        <div className="contact">
          <p>Koordynator ds. Ciężkich: </p>
          <span> 123456789</span>
        </div>
        <div className="contact">
          <p>Pogotowie (klinowe): </p>
          <span> 123456789</span>
        </div>
      </div>
      <div className="account-footer">
        <p>Kliknij po za oknem by zamknąć</p>
      </div>
    </>
  );
};

export default Counselor;
