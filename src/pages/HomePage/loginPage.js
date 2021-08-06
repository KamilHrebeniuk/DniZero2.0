import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import backgroundVideo from "../../images/backgrounds/backgroundVideo1.mp4";

const LoginPage = () => {
  return (
    <section className="login">
      <div className="player-container">
        <ReactPlayer
          className="player-content"
          onEnded={() => {
            console.log("Koniec filmu");
          }}
          playing
          muted
          url={backgroundVideo}
        />
      </div>
      <div className="login-page-left-container">
        <p>Logowanie</p>
        <form>
          <label htmlFor="login">Email:</label>
          <br />
          <input type="email" id="login" name="login" />
          <br />
          <label htmlFor="password">Hasło:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <input type="submit" value="Zaloguj się" />
        </form>
      </div>
      <div className="blocker">
        Logowanie dostępne dopiero po zakończeniu zapisów!
      </div>
      <div className="login-page-right-container">
        <p>Zapisz się już dziś!</p>
        <Link to="Register">
          <button>Zapisz się!</button>
        </Link>
      </div>
      <div className="login-page-bottom-container">
        <p>
          Kiedy:{" "}
          <b>
            <u>4-9 września 2021</u>
          </b>
        </p>
        <p>
          Gdzie:{" "}
          <b>
            <i>Trzy jeziora</i>
          </b>{" "}
          w{" "}
          <b>
            <u>Wieleniu Zaobrzańskim</u>
          </b>
        </p>
        <div className="login-page-bottom-container-info">
          Obóz studentów PWr to tydzień niesamowitych warsztatów, szkoleń i
          integracji studentów naszej uczelni. Mimo, że to wydarzenie skierowane
          jest głównie do nowo przyjętych studentów, udział w nim może wziąć
          każdy student Politechniki. Co roku w obozie bierze udział ponad
          dwustu uczestników przeżywających wspaniałą, tygodniową przygodę.
          Kadra złożona z najaktywniejszych studentów prowadzi warsztaty z
          różnych dziedzin – w tym wprowadzi Was w tajniki działania naszej
          Uczelni.
        </div>
        <Link to="Info">Czytaj więcej!</Link>
      </div>
      <div className="sponsors"></div>
    </section>
  );
};

export default LoginPage;
