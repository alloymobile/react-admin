import React from "react";
import AppIcon from "../cell/AppIcon";

function AppIconLink(props) {
  return (
    <a
      className={props.appIconLink.className}
      id={props.appIconLink.id}
      href={props.appIconLink.href}
    >
      <AppIcon appIcon={props.appIconLink.appIcon} />
      {props.appIconLink.name && <span className="px-2">{props.appIconLink.name}</span>}
    </a>
  );
}

export default AppIconLink;
