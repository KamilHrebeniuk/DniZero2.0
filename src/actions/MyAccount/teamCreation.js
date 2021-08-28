import React from "react";
import {Formik, Form, Field, FieldArray, ErrorMessage, getIn} from "formik";
import * as yup from "yup";
import {addToTeam, createTeam} from "./userActions";

export class teammate{
    constructor() {
        this.id = 0;

    }
}
export const teamCreation = () =>{
return(
    <Formik
        initialValues={{
            team_name: "",
            teammates:[],
        }}
        validationSchema={yup.object().shape({
            teammates: yup.array()
                .of(
                    yup.object().shape({
                        id: yup.number().typeError("Wprowadz liczbe").required("Wprowadz id").min(1,"minimum jedna cyfra").max(300,"Podano za duzy id"),

                    })
                )
                .min(1,"Potrzebna przynajmniej jedna osoba w druzynie"),
            team_name: yup.string().min(4, "Nazwa musi zawierać co najmniej 4 znaki").required("Podaj nazwe").matches(/^[a-zA-ZęółśążźćńĘÓŁŚĄŻŹĆŃ0-9\s\-_]+$/,"Tylko litery alfabetu łacińskiego"),

        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log(JSON.stringify(values));
                console.log(JSON.stringify(values['teammates']));
                createTeam(values['team_name']);
                addToTeam(values['team_name'],values['teammates']);
                setSubmitting(false);
            }, 400);
        }}
        render={({values}) =>(
            <Form>
                <FieldArray name="teammates"
                            render={arrayHelpers =>(
                                <div>
                                    <label htmlFor="team_name">Nazwa drużyny</label>
                                        <Field name="team_name"/>
                                        <Error name={"team_name"}/>
                                    {values.teammates && values.teammates.length >0 ?(
                                        values.teammates.map((teammate, index) =>(

                                            <div key={index}>
                                                <label>{`Osoba ${index}: `}</label>
                                                <Field name ={`teammates.${index}.id`}/>
                                                <Error name={`teammates.${index}.id`}/>
                                                <button
                                                    type = "button"
                                                    onClick={()=> arrayHelpers.remove(index)}
                                                    >
                                                    -
                                                </button>
                                                <button
                                                    type = "button"
                                                    onClick={()=> arrayHelpers.push('')}
                                                >
                                                    +
                                                </button>

                                            </div>

                                        ))
                                    ):(
                                        <button type ="button" onClick={()=>arrayHelpers.push('')}>
                                            Dodaj osobę
                                        </button>
                                    )}
                                    <div>
                                        <button type="submit">Stworz druzyne</button>
                                    </div>
                                </div>
                            )}
                />
            </Form>
        )}
    />
);
}
const Error = ({name})=>(
    <Field
        name={name}
        render={({form})=>{
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
            return touch && error ? error :null;
        }}
        />
);

