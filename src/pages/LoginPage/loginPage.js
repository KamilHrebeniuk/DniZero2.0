import BackgroundImage from "../../components/BackgroundImage";
import React from "react";
import {Field, Formik, Form, ErrorMessage} from "formik";
import * as yup from "yup";
import SponsorsBar from "../../components/SponsorsBar/sponsorsBar";
import ContactBar from "../../components/ContactBar";

const LoginPage = () => {
    const login = (array) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    var resp = JSON.parse(this.response);
                    if (resp) {
                        alert("zalogowano")
                    } else {
                        alert("Niepoprawne dane do logowania");
                    }
                } else {
                    alert("Brak połączenia");
                }
            }
        };
        xhttp.open("POST", "https://api.obozpwr.pl/register.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(array);
    };

    return(
        <>
            <BackgroundImage/>
            <Formik
                initialValues={{
                    login: "",
                    passwd: "",
                }}
                validationSchema={yup.object({
                    passwd: yup.string().max(4,"Podaj 4 cyfry").matches(/[0-9][0-9][0-9][0-9]/,"Haslo sklada sie z 4 cyfr"),
                    login: yup.string().email("Podaj prawidłowy mail").required("Wymagane"),
                })}
                onSubmit={(values, {setSubmitting}) =>{
                    setTimeout(()=>{
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
                    <Field type="email" id="login" name="login" placeholder="jan.kowalski@o2.pl" required/>
                    <label className="required" htmlFor="passwd">
                        <p>Hasło:</p>
                    </label>
                    <Field type="password" id="passwd" name="passwd" required/>
                    <input  className="button-container-primary" type="submit" value="Zaloguj!"/>
                    <ErrorMessage name="passwd"/>
                </Form>
            </div>
            </Formik>
            <ContactBar />
            <SponsorsBar title={"Organizatorzy i partnerzy"} />
        </>

    );
};

export default LoginPage;