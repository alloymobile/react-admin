import React from "react";

function AppButton(props) {
  return (
    <button
      className={props.appButton.className}
      id={props.appButton.id}
      onClick={() => props.onClick(props.appButton)}
    >
      {props.appButton.name}
    </button>
  );
}

export default AppButton;
