import React from "react";
import BackgroundVideo from "../../components/BackgroundVideo";
import PromotedEventDescription from "../../components/PromotedEvent";
import ContactBar from "../../components/ContactBar";
import SponsorsBar from "../../components/SponsorsBar";

const LandingPage = () => {
  const register_buttons = [
    { type: "primary", title: "Zapisz się!", to: "/Register" },
    { type: "secondary", title: "Więcej informacji", to: "/Info" },
  ];

  return (
    <>
      <BackgroundVideo />
      <PromotedEventDescription
        title={"Zapisz się na Obóz Studentów PWr"}
        description={
          <p>
            Kiedy: 4-9 września 2021
            <br /> Gdzie: Trzyjeziora w Wieleniu Zaobrzańskim
            <br />
            Cena: 670zł + 80zł dojazd
          </p>
        }
        buttons={register_buttons}
        movable
      />
      <ContactBar />
      <SponsorsBar title={"Organizatorzy i sponsorzy"} />
    </>
  );
};

export default LandingPage;
