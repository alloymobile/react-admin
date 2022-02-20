import React from "react";
import AppIcon from "../cell/AppIcon";

function AppIconLink({appIconLink}) {
  return (
    <a
      className={appIconLink.className}
      id={appIconLink.id}
      href={appIconLink.href}
    >
      <AppIcon appIcon={appIconLink.appIcon} />
      {appIconLink.name && <span className="px-2">{appIconLink.name}</span>}
    </a>
  );
}

export default AppIconLink;
