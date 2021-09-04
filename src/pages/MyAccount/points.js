import React from "react";
import {addingPoints, getAllTeams} from "../../actions/MyAccount/userActions";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";

function Points(){
    getAllTeams();
    var teams = JSON.parse(localStorage.getItem("AllTeams"));
    return (
        <div className="addingPoints">
            <Formik initialValues={{
                team_id: 0,
                points: 0,
            }}
                    validationSchema={yup.object({
                        team_id: yup.number().min(1,"Podaj poprawny wybor").required("Podaj druzyne"),
                        points: yup.number().required("Podaj ilosc punktow"),
                    })}
                    onSubmit={(values, {setSubmitting}) =>{
                        setTimeout(() => {
                            addingPoints(parseInt(values["team_id"]), values["points"]);
                            setSubmitting(false);
                        }, 400);
                    }}>


                <Form name="addingPoints-house">
                    <h2>Domki: </h2>
                    <div className="addingPoints-houses">
                        <Field as="select" name="team_id" id="house_id">
                            <option hidden value></option>
                            {teams.filter((team) => team[2] === 0).map((data)=>(
                                <option value={data.team_id}>{data.team_name}</option>
                            ))}
                        </Field>

                        <Field type="number" id="points" name="points" required/>
                        <input className="button-container-primary" type="submit" value="Wyślij!"/>
                    </div>
                </Form>
            </Formik>
            <Formik initialValues={{
                team_id: 0,
                points: 0,
            }}
                    validationSchema={yup.object({
                        team_id: yup.number().min(1,"Podaj poprawny wybor").required("Podaj druzyne"),
                        points: yup.number().required("Podaj ilosc punktow"),
                    })}
                    onSubmit={(values, {setSubmitting}) =>{
                        setTimeout(() => {
                            addingPoints(parseInt(values["team_id"]), values["points"]);
                            setSubmitting(false);
                        }, 400);
                    }}>
                <Form name="addingPoints-teams">
                    <h2>Drużyny: </h2>
                    <div className="addingPoints-teams">
                        <Field as="select" name="team_id" id="team_id">
                            <option hidden value></option>
                            {teams.filter((team) => team[2] === 1).map((data)=>(
                                <option value={data.team_id}>{data.team_name}</option>
                            ))}
                        </Field>

                        <Field type="number" id="points" name="points" required/>
                        <input className="button-container-primary" type="submit" value="Wyślij!"/>

                    </div>
                </Form>
            </Formik>
        </div>
    );
}



export default Points;