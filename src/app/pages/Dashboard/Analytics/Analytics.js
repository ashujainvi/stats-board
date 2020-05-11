import React from "react";
import "./Analytics.scss";
// components
import WelcomeCard from "app/shared/components/WelcomeCard/WelcomeCard";

class Overview extends React.Component {
  render() {
    return (
      <div className="analytics content-wrapper">
        <h2 className="heading">Analytics</h2>
        <WelcomeCard title="Welcome to your analytics section" />
      </div>
    );
  }
}

export default Overview;
