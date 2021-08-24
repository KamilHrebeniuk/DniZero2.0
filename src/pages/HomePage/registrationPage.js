import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import BackgroundImage from "../../components/BackgroundImage";
import PromotedEventDescription from "../../components/PromotedEvent";
import ContactBar from "../../components/ContactBar";
import SponsorsBar from "../../components/SponsorsBar";
import IsMobile from "../../hooks/isMobile";

const RegistrationPage = () => {
  const register_buttons = [
    { type: "primary", title: "Zapisz się!", to: "/Register" },
    { type: "secondary", title: "Więcej informacji", to: "/Info" },
  ];

  const isMobile = IsMobile();

  return (
    <>
      {isMobile ? <BackgroundImage /> : <BackgroundVideo />}
      <PromotedEventDescription
        title={"Zapisz się na Obóz Studentów PWr"}
        description={
          <p>
            Kiedy: 4-9 września 2021
            <br /> Gdzie: Trzy jeziora w Wieleniu Zaobrzańskim
            <br />
            Cena: 699,99zł + 79,99zł dojazd (VAT marża)
          </p>
        }
        // additionalInfo={"Majtkowie zaciągnięci z rezerwy:\u00a010"}
        buttons={register_buttons}
        movable
      />
      <ContactBar />
      <SponsorsBar title={"Organizatorzy i partnerzy"} />
    </>
  );
};

export default RegistrationPage;
