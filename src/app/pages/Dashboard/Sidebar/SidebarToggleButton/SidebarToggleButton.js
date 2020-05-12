import React from "react";

import "./SidebarToggleButton.scss";

const SidebarToggleButton = (props) => (
  <button
    type="button"
    className="button button-secondary sidebar-toggle-button"
    onClick={props.click}
  >
    Toggle
  </button>
);

export default SidebarToggleButton;
