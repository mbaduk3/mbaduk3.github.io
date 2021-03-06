import React from "react"
import ThemeChanger from "../components/themeChanger"
import Hamburger from "../components/hamburger"

export default (props) => {

  const defNav = (
    <nav className="navigation"> 
      <ThemeChanger menu={props.menu}/>
      <Hamburger menu={props.menu}/>
    </nav>
  );

  return defNav;
  
}