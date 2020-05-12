import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarToggleButton.scss";

const SidebarToggleButton = (props) => (
  <button
    type="button"
    className="button sidebar-toggle-button"
    onClick={props.click}
  >
    <FontAwesomeIcon icon="archway" />
  </button>
);

export default SidebarToggleButton;
