import React from "react";

export default function Register() {
  return (
    <div className="register">
      <div className="register-content">
        <p>Rejestracja</p>
        <form>
          <input type="text" id="name" name="name" placeholder="Imie i Nazwisko" required />
          <br />

          <input type="email" id="mail" name="mail" placeholder="Email" required />
          <br />

          <input
            type="tel"
            pattern="[0-9]{9}"
            id="number"
            name="number"
            placeholder="Numer telefonu"
            required
          />
          <br />

          <label className="required" htmlFor="size">
            Rozmiar koszuli:
          </label>
          <select name="size" id="size">
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>

          <label className="required" htmlFor="year">
            Rok studiów:
          </label>
          <select name="year" id="year">
            <option value="1">1 rok</option>
            <option value="2">2 rok</option>
            <option value="3">3 rok</option>
            <option value="4">4 rok</option>
            <option value="5">5 rok</option>
          </select>

          <label className="required" htmlFor="trans">
            Transport:
          </label>
          <select name="trans" id="trans">
            <option value="with">tak</option>
            <option value="without">nie</option>
          </select>
          <br />

          <label className="required" htmlFor="diet">
            Dieta:
          </label>
          <select name="diet" id="diet">
            <option value="meat">Normalna</option>
            <option value="vege">Wegetariańska</option>
            <option value="vegan">Wegańska</option>
            <option value="special">Specjalna ze względów zdrowotnych</option>
          </select>
          <br />

          <div className="ICE-content">
            <label className="required" htmlFor="ICE">
              Kontakt w razie wypadku (ICE):
            </label>
            <br />
            <input type="text" id="ICE-name" name="ICE-name" placeholder="Imie i Nazwisko" required />
            <br />
            <input type="text" id="ICE-no" name="ICE-no" placeholder="Numer" required />
            <br />
            <input type="text" id="ICE-adr" name="ICE-adr" placeholder="Adres" required />
            <br />
          </div>

          <input type="checkbox" id="vaccine" name="vaccine" />
          <label htmlFor="vaccine">
            Jestem osobą zaszczepioną
          </label>
          <br />

          <input type="checkbox" id="rules" name="rules" required />
          <label className="required" htmlFor="rules">
              Przeczytałem/-am i akceptuję warunki <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">regulaminu</a>
          </label>
          <br />

          <input type="submit" value="Wyślij!" />
        </form>
      </div>
    </div>
  );
}
