import React from "react";

function AppLink({appLink}) {
  return (
    <a
      className={appLink.className}
      id={appLink.id}
      href={appLink.href}
    >
      {appLink.name}
    </a>
  );
}

export default AppLink;
