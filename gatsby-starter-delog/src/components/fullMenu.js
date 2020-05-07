import React from 'react'
import { Link } from 'gatsby'
import ThemeChanger from './themeChanger'

export default (props) => {
    return (
        <div className="full-menu-div" style={props.style}>
            <ThemeChanger style={{"display": "content"}}/>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/all_work">All Work</Link>
        </div>
    )
}