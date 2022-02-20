import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AppIcon(props) {
  return (
    <FontAwesomeIcon
      icon={props.appIcon.icon}
      spin={props.appIcon.spin && props.appIcon.spin}
      size={props.appIcon.size && props.appIcon.size}
    />
  );
}

export default AppIcon;
