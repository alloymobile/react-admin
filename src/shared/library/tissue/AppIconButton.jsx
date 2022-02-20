import React from "react";
import AppIcon from "../cell/AppIcon";

function AppIconButton({appIconButton,onClick}) {
  return (
    <button
      className={appIconButton.className}
      id={appIconButton.id}
      onClick={() => onClick(appIconButton)}
    >
      <AppIcon appIcon={appIconButton.appIcon} />
      {appIconButton.name && <span className="px-2">{appIconButton.name}</span>}
    </button>
  );
}

export default AppIconButton;
