import React from "react";
import SS_logo from "../../assets/sponsors/SS_logo.png";
import PKO_logo from "../../assets/sponsors/PKO_logo.png";
import C13_logo from "../../assets/sponsors/C13_logo.png";
import Szamani_logo from "../../assets/sponsors/Szamani_logo.png";
import Neobab_logo from "../../assets/sponsors/Neobab_logo.png";

const Sponsor = ({ title, logo, color }) => {
  console.log(color);
  return (
    <div
      className="sponsors_bar-sponsor-container"
      style={{ backgroundColor: color }}
    >
      <img className="sponsors_bar-sponsor-logo" src={logo} alt={"Logo"} />
      <p className="sponsors_bar-sponsor-title">{title}</p>
    </div>
  );
};

const SponsorsBar = ({ opacity }) => {
  const sponsors = [
    { title: "Samorząd Studencki PWr", image: SS_logo, color: "#ffffff" },
    { title: "PKO Bank Polski", image: PKO_logo, color: "#ffffff" },
    { title: "Wydruki C-13", image: C13_logo, color: "#ffffff" },
    { title: "Szamani", image: Szamani_logo, color: "#ffffff" },
    { title: "Neobab", image: Neobab_logo, color: "#0D6638" },
  ];

  return (
    <section className="sponsors_bar-container" style={{ opacity: opacity }}>
      <h1 className="sponsors_bar-sponsors-title">Wspierają nas</h1>
      <div className="sponsors_bar-sponsors-container">
        {sponsors.map((sponsor) => (
          <Sponsor
            title={sponsor.title}
            logo={sponsor.image}
            color={sponsor.color}
          />
        ))}
      </div>
    </section>
  );
};

export default SponsorsBar;
