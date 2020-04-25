import React from "react";
// import "./ErrorCard.scss";

class ErrorCard extends React.Component {
  render() {
    return <div className="server-error">{this.props.error.error}</div>;
  }
}

export default ErrorCard;
