import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <div className="nav-links">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/all_work">All Work</Link>
        <Link to="/contact">About</Link>
    </div>
    <ThemeChanger />
  </nav>
  
)