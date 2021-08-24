import React from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

export default function Register() {
  let history = useHistory();

  const sendRegisterForm = (array) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var resp = JSON.parse(this.response);
          if (resp["result"]) {
            history.push("/RegisterSuccess");
          } else {
            history.push("/RegisterFail");
            document.getElementById("Error").innerHTML = resp["message"];
          }
        } else {
          history.push("/RegisterFail");
        }
      }
    };
    /* TO DO: Zmienic tylko link i dziala. Ogolnie wydaje mi sie ze cala ta funkcje daloby zrobic globalna ale nie do konca wiem jak*/
    xhttp.open("POST", "https://api.obozpwr.pl/register.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(array);
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        pesel: "",
        adr: "",
        list_adr: "",
        shirt: "",
        year: "",
        bus: "",
        diet: "",
        ICE_name: "",
        ICE_phone: "",
        health: false,
        age: false,
        rules: false,
      }}
      validationSchema={yup.object({
        name: yup
          .string()
          .min(4, "Imie i nazwisko musi zawierać co najmniej 4 litery!")
          .required("Wymagane"),
        phone: yup.string().min(8).max(15).required("Wymagane"),
        email: yup
          .string()
          .email("Podaj prawidłowy adres email")
          .required("Wymagane"),
        pesel: yup
          .string()
          .min(
            9,
            "Pesel lub inny dowód tożsamości musi zawierać co najmniej 9 znaków"
          )
          .max(
            11,
            "Pesel lub inny dowód tożsamości zawiera maksymalnie 11 znaków"
          )
          .required("Wymagane"),
        adr: yup.string().min(4, "Podaj prawidłowy adres").required("Wymagane"),
        list_adr: yup.string().min(4, "Podaj prawidłowy adres"),
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
        ICE_phone: yup.string().min(5).max(14).required("Wymagane"),
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
          sendRegisterForm(JSON.stringify(values));
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
                  Imiona i nazwisko:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jan Adam Kowalski"
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
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="123456789"
                  required
                />
                <label className="required" htmlFor="pesel">
                  PESEL lub seria i numer dowodu tożsamości lub numer paszportu:
                </label>
                <Field
                  type="text"
                  id="pesel"
                  name="pesel"
                  placeholder="12345678909"
                  required
                />
                <label className="required" htmlFor="adr">
                  Adres zamieszkania:
                </label>
                <Field
                  type="text"
                  id="adr"
                  name="adr"
                  placeholder="ul. Piekna 3/5 Wroclaw"
                  required
                />
                <label htmlFor="list_adr">
                  Adres korespondencyjny, jeżeli inny:
                </label>
                <Field
                  type="text"
                  id="list_adr"
                  name="list_adr"
                  placeholder="ul. Piekna 3/5 Wroclaw"
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

                <label className="required" htmlFor="ICE_phone">
                  Numer telefonu:
                </label>
                <Field
                  type="text"
                  id="ICE_phone"
                  name="ICE_phone"
                  placeholder="987654321"
                  required
                />
                <div>
                  <label className="required shirt" htmlFor="shirt">
                    Rozmiar koszulki:
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
                </div>

                <div>
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
                </div>

                <div>
                  <label className="required diet" htmlFor="diet">
                    Dieta:
                  </label>
                  <Field as="select" name="diet" id="diet" required>
                    <option hidden value></option>
                    <option value="meat">Normalna</option>
                    <option value="vege">Wegetariańska</option>
                    <option value="vegan">Wegańska</option>
                    <option value="special">
                      Specjalna ze względów zdrowotnych
                    </option>
                  </Field>
                </div>

                <div>
                  <label className="required bus" htmlFor="bus">
                    Transport w obie strony:
                  </label>
                  <Field as="select" name="bus" id="bus" required>
                    <option hidden value></option>
                    <option value="with">tak</option>
                    <option value="without">nie</option>
                  </Field>
                </div>
              </div>

              <div className="register-content-column-third">
                <label className="required" htmlFor="health">
                  <Field type="checkbox" id="health" name="health" required />
                  Wyrazam zgode na przetwarzanie przez Organizatora danych o
                  moim stanie zdrowia, w tym o spełnieniu wymogu dotyczącego
                  <b style={{color: "#681a2b"}}> szczepienia określonego w pkt. 6. Regulaminu</b>. Podanie tych
                  danych jest dobrowolne, ale niezbędne do zapewnienia
                  bezpieczeństwa uczestnikowi, a więc i do wykonania usługi
                  (uczestnictwa w Obozie).
                </label>
                <div className="back">
                  Dane będą przetwarzane zgodnie z Polityką Prywatności. Zgodnie
                  z Regulaminem zobowiązuję się poinformować Organizatora do
                  dnia 28.08.2021 r. o jakichkolwiek dolegliwościach i chorobach
                  mogących mieć wpływ na bezpieczeństwo w trakcie trwania Obozu.
                  Ponoszę wszelkie konsekwencje wynikające z zaniechania tego
                  obowiązku. Organizator zastrzega sobie prawo do
                  niedopuszczenia uczestnika do udziału w Obozie (co wiąże się z
                  pełnym zwrotem opłaty za Obóz, jeżeli zgłoszenie zostało
                  złożone w ustalonym wyżej terminie), jeżeli zgłoszone przez
                  uczestnika dolegliwości mogłyby stanowić przeszkodę w udziale
                  w Obozie. Organizator informuje, że wynajęty ośrodek nie
                  spełnia wymogów dla osób o obniżonej sprawności fizycznej.
                  Organizator nie ponosi odpowiedzialności z tytułu
                  niedostosowania Ośrodka do indywidualnych potrzeb Uczestnika o
                  obniżonej sprawności fizycznej.
                </div>

                <label className="required" htmlFor="age">
                  <Field type="checkbox" id="age" name="age" required />
                  Mam ukończone 18 lat i posiadam status studenta lub jestem
                  nowo przyjętym studentem.
                </label>

                <label className="required" htmlFor="rules">
                  <Field type="checkbox" id="rules" name="rules" required />
                  <span>Przeczytałem/-am </span>
                  <a
                    href="https://www.api.obozpwr.pl/documents/Regulamin_Obozu_Studentow_PWr_2021.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    regulamin i politykę prywatności
                  </a>
                  <span>
                    , akceptuję ich postanowienia i wyrażam zgodę na
                    prztwarzanie określonych w nich danych osobowych na potrzeby
                    zrealizowania usługi.
                  </span>
                </label>

                <p className="profile">
                  W trakcie trwania Obozu będą wykonywane i publikowane przez
                  Organizatora i jego partnerów (również w celach promocyjnych
                  swoich produktów i usług) zdjęcia i filmy, na których
                  uczestnik może stanowić element większej całości.
                </p>
                <span className="profile">
                  Przed rozpoczęciem udziału w Obozie konieczne będzie
                  przekazanie Organizatorowi wypełnionej tego samego dnia{" "}
                </span>
                <a
                  href="https://www.api.obozpwr.pl/documents/Zalacznik_nr_2_1_Deklaracja_o_stanie_zdrowia_w_zwiazku_z_pandemia_COVID-19.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  deklaracji o stanie zdrowia w związku z pandemią COVID-19.
                </a>

                <input
                  className="button-container-primary"
                  type="submit"
                  value="Wyślij!"
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
