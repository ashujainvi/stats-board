import React from "react";
import "./Overview.scss";
// components
import WelcomeCard from "app/shared/components/WelcomeCard/WelcomeCard";

class Overview extends React.Component {
  render() {
    return (
      <div className="overview content-wrapper">
        <h2 className="heading">Dashboard</h2>
        <WelcomeCard title="Welcome to your new dashboard" />
      </div>
    );
  }
}

export default Overview;
