import React from "react";

export default function Register() {
  return (
    <div className="register">
      <div className="register-content">
        <p>Rejestracja</p>
        <form>
          <label className="required" htmlFor="name">
            Imie:
          </label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />

          <label className="required" htmlFor="surname">
            Nazwisko:
          </label>
          <br />
          <input type="text" id="surname" name="surname" required />
          <br />

          <label className="required" htmlFor="mail">
            Email:
          </label>
          <br />
          <input type="email" id="mail" name="mail" required />
          <br />

          <label className="required" htmlFor="number">
            Numer telefonu:
          </label>
          <br />
          <input
            type="tel"
            pattern="[0-9]{9}"
            id="number"
            name="number"
            required
          />
          <br />

          <input type="submit" value="Wyślij!" />
        </form>
      </div>
    </div>
  );
}
