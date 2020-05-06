import React from "react";
import "./WelcomeCard.scss";

function WelcomeCard({ title }) {
  return (
    <div className="card welcome-card">
      <h4>{title}</h4>
      <p>Hope you'll enjoy it!</p>
    </div>
  );
}

export default WelcomeCard;
