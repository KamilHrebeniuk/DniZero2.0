import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type = "primary", to = "/", title }) => {
  switch (type) {
    case "primary": {
      return (
        <div className="button-container-primary">
          <Link to={to}>{title}</Link>
        </div>
      );
    }
    case "secondary": {
      return (
        <div className="button-container-secondary">
          <Link to={to}>{title}</Link>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};

export default Button;
