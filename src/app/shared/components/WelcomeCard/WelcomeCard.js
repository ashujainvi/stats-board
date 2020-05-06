import React from "react";
import "./WelcomeCard.scss";

function WelcomeCard({ title }) {
  return (
    <div className="card welcome-card">
      <p>{title}</p>
    </div>
  );
}

export default WelcomeCard;
