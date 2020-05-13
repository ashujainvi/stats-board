import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarToggleButton.scss";

const SidebarToggleButton = (props) => {
  const [isActive, setActive] = useState(false);
  //   let teethString = "teeth";

  const onButtonClick = () => {
    setActive(!isActive);
    props.click();
    // teethString = isActive ? "teethOpen" : "teeth";
  };

  return (
    <button
      type="button"
      className="button sidebar-toggle-button"
      onClick={() => onButtonClick()}
    >
      <FontAwesomeIcon icon={isActive ? "teeth-open" : "teeth"} />
    </button>
  );
};

export default SidebarToggleButton;
