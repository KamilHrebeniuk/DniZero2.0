import React from "react";
import Button from "../Button";

const PromotedEventDescription = ({ title, description, buttons }) => {
  console.log(buttons);
  return (
    <section className="promoted_event_description-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="promoted_event_description-buttons_container">
        {buttons.map((button) => (
          <Button type={button.type} to={button.to} title={button.title} />
        ))}
      </div>
    </section>
  );
};

export default PromotedEventDescription;
