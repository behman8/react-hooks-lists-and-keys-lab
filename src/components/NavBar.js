import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const allTabs = links.map(tab => {
    return <a key={tab} href={`#${tab}`}>{tab}</a> 
  })

  return <nav>{allTabs}</nav>;
}

export default NavBar;
