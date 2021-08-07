import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

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
          send(JSON.stringify(values));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="register">
        <div className="register-content">
          <p>Rejestracja</p>

          <Form name="register">
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Imie i Nazwisko"
              required
            />
            <ErrorMessage name="name" />
            <br />

            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <ErrorMessage name="email" />
            <br />

            <Field
              type="tel"
              pattern="[0-9]{9}"
              id="phone"
              name="phone"
              placeholder="Numer telefonu: 123456789"
              required
            />
            <ErrorMessage name="phone" />
            <br />

            <label className="required" htmlFor="size">
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
            <ErrorMessage name="shirt" />

            <label className="required" htmlFor="year">
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
            <ErrorMessage name="year" />

            <label className="required" htmlFor="bus">
              Transport:
            </label>
            <Field as="select" name="bus" id="bus">
              <option hidden value></option>
              <option value="with">tak</option>
              <option value="without">nie</option>
            </Field>
            <ErrorMessage name="bus" />
            <br />

            <label className="required" htmlFor="diet">
              Dieta:
            </label>
            <Field as="select" name="diet" id="diet">
              <option hidden value></option>
              <option value="meat">Normalna</option>
              <option value="vege">Wegetariańska</option>
              <option value="vegan">Wegańska</option>
              <option value="special">Specjalna ze względów zdrowotnych</option>
            </Field>
            <ErrorMessage name="diet" />
            <br />

            <div className="ICE-content">
              <label className="required" htmlFor="ICE">
                Kontakt w razie wypadku (ICE):
              </label>
              <br />
              <Field
                type="text"
                id="ICE_name"
                name="ICE_name"
                placeholder="Imie i Nazwisko"
                required
              />
              <ErrorMessage name="ICE_name" />
              <br />
              <Field
                type="tel"
                pattern="[0-9]{9}"
                id="ICE_phone"
                name="ICE_phone"
                placeholder="Numer"
                required
              />
              <ErrorMessage name="ICE_phone" />
              <br />
              <Field
                type="text"
                id="ICE_adr"
                name="ICE_adr"
                placeholder="Adres"
                required
              />
              <ErrorMessage name="ICE_adr" />
              <br />
            </div>

            <Field type="checkbox" id="vaccine" name="vaccine" />
            <label htmlFor="vaccine">Jestem osobą zaszczepioną</label>
            <br />
            <p className="extra">
              Informacja nie jest skojarzona z osobą, a podanie jej jest
              dobrowolne i nieobligatoryjne. <br /> Zbierana jest w celu
              zliczenia ilości osób zaszczepionych
            </p>

            <Field type="checkbox" id="health" name="health" required />
            <label className="required" htmlFor="health">
              Deklaruje że jestem w dobrym stanie zdrowia i mogę wziąć udział w
              obozie.
              <span className="extra">
                &emsp;Ośrodek nie jest przystosowany do potrzeb osób
                niepełnosprawnych.
              </span>
            </label>
            <br />

            <Field type="checkbox" id="age" name="age" required />
            <label className="required" htmlFor="age">
              Mam ukończone 18 lat
            </label>
            <br />

            <Field type="checkbox" id="rules" name="rules" required />
            <label className="required" htmlFor="rules">
              Przeczytałem/-am i akceptuję warunki{" "}
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                rel="noreferrer"
                target="_blank"
              >
                regulaminu
              </a>
            </label>
            <br />

            <input type="submit" value="Wyślij!" />
          </Form>
        </div>
      </div>
    </Formik>
  );
}
