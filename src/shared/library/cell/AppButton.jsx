import React from "react";

function AppButton({appButton,onClick}) {
  return (
    <button
      className={appButton.className}
      id={appButton.id}
      onClick={() => onClick(appButton)}
    >
      {appButton.name}
    </button>
  );
}

export default AppButton;
