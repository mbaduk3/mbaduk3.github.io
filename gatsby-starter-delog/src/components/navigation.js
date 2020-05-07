import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Hamburger from "../components/hamburger"

export default (props) => (
  <nav className="navigation"> 
    <div className="nav-links">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/all_work">All Work</Link>
    </div>
    <Hamburger />
    <ThemeChanger />
  </nav>
  
)