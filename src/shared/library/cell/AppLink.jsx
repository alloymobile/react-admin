import React from "react";

function AppLink(props) {
  return (
    <a
      className={props.appLink.className}
      id={props.appLink.id}
      href={props.appLink.href}
    >
      {props.appLink.name}
    </a>
  );
}

export default AppLink;
