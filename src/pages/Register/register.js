import React from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

export default function Register() {
  function send(array) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
    };
    /* TO DO: Zmienic tylko link i dziala. Ogolnie wydaje mi sie ze cala ta funkcje daloby zrobic globalna ale nie do konca wiem jak*/
    xhttp.open("POST", "http://localhost:80/text/register.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(array);
  }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        shirt: "",
        year: "",
        bus: "",
        diet: "",
        ICE_name: "",
        ICE_phone: "",
        ICE_adr: "",
        vaccine: false,
        health: false,
        age: false,
        rules: false,
      }}
      validationSchema={yup.object({
        name: yup
          .string()
          .min(4, "Imie i nazwisko musi zawierać co najmniej 4 litery!")
          .required("Wymagane"),
        phone: yup.string().required("Wymagane"),
        email: yup
          .string()
          .email("Podaj prawidłowy adres email")
          .required("Wymagane"),
        shirt: yup
          .string()
          .oneOf(["xs", "s", "m", "l", "xl"], "Wybrano niepoprawny rozmiar")
          .required("Wymagane"),
        year: yup
          .string()
          .oneOf(["1", "2", "3", "4", "5"], "Wybrano niepoprawny rok")
          .required("Wymagane"),
        bus: yup
          .string()
          .oneOf(["with", "without"], "Wybrano niepoprawny wybór")
          .required("Wymagane"),
        diet: yup
          .string()
          .oneOf(["meat", "vege", "vegan", "special"], "Niepoprawny wybór")
          .required("Wymagane"),
        ICE_name: yup
          .string()
          .min(4, "Imie i nazwisko musi zawierać co najmniej 4 litery!")
          .required("Wymagane"),
        ICE_adr: yup
          .string()
          .min(4, "Podaj prawidłowy adres")
          .required("Wymagane"),
        ICE_phone: yup.string().required("Wymagane"),
        vaccine: yup.boolean().oneOf([true, false]),
        health: yup
          .boolean()
          .oneOf([true], "Musisz potwierdzić swój stan zdrowia")
          .required("Wymagane"),
        age: yup
          .boolean()
          .oneOf([true], "Musisz potwierdzić swój wiek")
          .required("Wymagane"),
        rules: yup
          .boolean()
          .oneOf([true], "Musisz zaakceptować regulamin")
          .required("Wymagane"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="register">
        <p className="title">Rejestracja</p>
        <div className="register-close">
          <Link to="/">
            <img className="register-close-icon" src={exit} alt={"Exit"} />
          </Link>
        </div>
        <div className="register-content">
          <Form name="register">
            <div className="register-content-column">
              <div className="register-content-column-primary">
                <p>Twoje dane:</p>

                <label className="required" htmlFor="name">
                  Imię i nazwisko:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jan Kowalski"
                  required
                />

                <label className="required" htmlFor="email">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jan.kowalski@o2.pl"
                  required
                />

                <label className="required" htmlFor="phone">
                  Numer telefonu:
                </label>
                <Field
                  type="tel"
                  pattern="[0-9]{9}"
                  id="phone"
                  name="phone"
                  placeholder="123456789"
                  required
                />
              </div>

              <div className="register-content-column-secondary">
                <p>Kontakt w razie wypadku (ICE):</p>

                <label className="required" htmlFor="ICE_name">
                  Imię i nazwisko:
                </label>
                <Field
                  type="text"
                  id="ICE_name"
                  name="ICE_name"
                  placeholder="Anna Kowalska"
                  required
                />
                <br />
                <label className="required" htmlFor="ICE_phone">
                  Numer telefonu:
                </label>
                <Field
                  type="tel"
                  pattern="[0-9]{9}"
                  id="ICE_phone"
                  name="ICE_phone"
                  placeholder="987654321"
                  required
                />
                <br />
                <label className="required" htmlFor="ICE_adr">
                  Adres:
                </label>
                <Field
                  type="text"
                  id="ICE_adr"
                  name="ICE_adr"
                  placeholder="ul. Piekna 3/5 Wroclaw"
                  required
                />
                <br />
              </div>
            </div>

            <label className="required shirt" htmlFor="shirt">
              Rozmiar koszuli:
            </label>
            <Field as="select" name="shirt" id="shirt">
              <option hidden value></option>{" "}
              {/*daje puste miejsce w dropboxie i dobrze wyglada*/}
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </Field>

            <label className="required year" htmlFor="year">
              Rok studiów:
            </label>
            <Field as="select" name="year" id="year">
              <option hidden value></option>
              <option value="1">1 rok</option>
              <option value="2">2 rok</option>
              <option value="3">3 rok</option>
              <option value="4">4 rok</option>
              <option value="5">5 rok</option>
            </Field>

            <label className="required diet" htmlFor="diet">
              Dieta:
            </label>
            <Field as="select" name="diet" id="diet" required>
              <option hidden value></option>
              <option value="meat">Normalna</option>
              <option value="vege">Wegetariańska</option>
              <option value="vegan">Wegańska</option>
              <option value="special">Specjalna ze względów zdrowotnych</option>
            </Field>

            <label className="required bus" htmlFor="bus">
              Transport z Wrocławia na obóz:
            </label>
            <Field as="select" name="bus" id="bus" required>
              <option hidden value></option>
              <option value="with">tak</option>
              <option value="without">nie</option>
            </Field>

            <label htmlFor="vaccine">
              <Field type="checkbox" id="vaccine" name="vaccine" />
              Jestem osobą zaszczepioną
            </label>

            <p className="extra">
              Informacja nie jest skojarzona z osobą, a podanie jej jest
              dobrowolne i nieobligatoryjne. <br /> Zbierana jest w celu
              zliczenia ilości osób zaszczepionych
            </p>
            <label className="required" htmlFor="health">
              <Field type="checkbox" id="health" name="health" required />
              Deklaruje że jestem w dobrym stanie zdrowia i mogę wziąć udział w
              obozie.
            </label>

            <p className="extra">
              Ośrodek nie jest przystosowany do potrzeb osób niepełnosprawnych.
            </p>
            <label className="required" htmlFor="age">
              <Field type="checkbox" id="age" name="age" required />
              Mam ukończone 18 lat
            </label>

            <label className="required" htmlFor="rules">
              <Field type="checkbox" id="rules" name="rules" required />
              Przeczytałem/-am i akceptuję warunki{" "}
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                rel="noreferrer"
                target="_blank"
              >
                regulaminu
              </a>
            </label>

            <input
              className="button-container-primary"
              type="submit"
              value="Wyślij!"
            />
          </Form>
        </div>
      </div>
    </Formik>
  );
}
