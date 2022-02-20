import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AppIcon({appIcon}) {
  return (
    <FontAwesomeIcon
      icon={appIcon.icon}
      spin={appIcon.spin && appIcon.spin}
      size={appIcon.size && appIcon.size}
    />
  );
}

export default AppIcon;
