import BackgroundImage from "../../components/BackgroundImage";
import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import SponsorsBar from "../../components/SponsorsBar/sponsorsBar";
import ContactBar from "../../components/ContactBar";

export let resp;
export let schedule;
const LoginPage = ({ logIn }) => {
  const login = (array) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
           resp = JSON.parse(this.response);

          if (Object.keys(resp).length === 3) {

            con();
            getData();
            logIn();
          } else {
            alert("Niepoprawne dane do logowania");
          }
        } else {
          alert("Brak połączenia");
        }
      }
    };
    xhttp.open("POST", "https://dev.obozpwr.pl/login.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(array);
  };

  return (
    <>
      <BackgroundImage />
      <Formik
        initialValues={{
          login: "",
          passwd: "",
        }}
        validationSchema={yup.object({
          passwd: yup
            .string()
            .max(4, "Podaj 4 cyfry")
            .matches(/[0-9][0-9][0-9][0-9]/, "Haslo sklada sie z 4 cyfr"),
          login: yup
            .string()
            .email("Podaj prawidłowy mail")
            .required("Wymagane"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            login(JSON.stringify(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="login-content">
          <h1>Logowanie</h1>
          <Form name="login">
            <label className="required" htmlFor="login">
              <p>E-mail:</p>
            </label>
            <Field
              type="email"
              id="login"
              name="login"
              placeholder="jan.kowalski@o2.pl"
              required
            />
            <label className="required" htmlFor="passwd">
              <p>Hasło:</p>
            </label>
            <Field type="password" id="passwd" name="passwd" required />
            <input
              className="button-container-primary"
              type="submit"
              value="Zaloguj!"
            />
            <ErrorMessage name="passwd" />
          </Form>
        </div>
      </Formik>
      <ContactBar />
      <SponsorsBar title={"Organizatorzy i partnerzy"} />
    </>
  );
};



function con() {
  const xhttp = new XMLHttpRequest();
  var url = "https://dev.obozpwr.pl/session.php";
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        array["SID"] = document.cookie;

      }
    }
  };
  xhttp.open("POST", url, false);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
}
let array = {
  what: 1,
  src: 1,
  opt: 1,
  ch: 1,
  SID: "",
};
function getData() {
  const xhtps = new XMLHttpRequest();
  var url = "https://dev.obozpwr.pl/gettingData.php";
  xhtps.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        schedule = JSON.parse(this.response);
      }
    }
  };
  xhtps.open("POST", url, false);
  xhtps.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhtps.send(JSON.stringify(array));
}

export default LoginPage;
