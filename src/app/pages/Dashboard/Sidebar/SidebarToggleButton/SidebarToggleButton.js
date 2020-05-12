import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarToggleButton.scss";

const SidebarToggleButton = (props) => {
  const [isActive, setActive] = useState(false);

  const onButtonClick = () => {
    setActive(!isActive);
    props.click();
  };

  return (
    <button
      type="button"
      className="button sidebar-toggle-button"
      onClick={() => onButtonClick()}
    >
      <FontAwesomeIcon icon="teeth" />
    </button>
  );
};

export default SidebarToggleButton;
