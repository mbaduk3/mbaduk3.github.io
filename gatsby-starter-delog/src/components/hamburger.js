import React, { useState } from 'react'
import FullMenu from './fullMenu'

export default () => {

 
    const hamburgerIconStyle = {
        "position": "relative",
        "width": "23px",
        "height": "19px",
        "fontSize": "2.5rem",
        "top": "-16px",
        "zIndex": "102",
    }

    const [menuOpen, setMenuOpen] = useState(false);

    var bodyOverflow = menuOpen ? "auto" : "hidden";

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
        document.body.style.overflow = bodyOverflow;
    }

    var iconColor = menuOpen ? "var(--background)" : "var(--primary-color)";

    const icon = 
        <div 
            className="hamburger-icon" 
            style={{...hamburgerIconStyle, "color": iconColor}}
            onClick={_ => toggleMenu()}>
                { menuOpen  ? "x"  : "=" }
        </div>
    
    const menuOffStyle = {
        "display": "none",
        "opacity": "0",
    }

    const menuOnStyle = {
        "display": "inherit",
        "opacity": "1",
    }

    return (
        <label className="hamburger-label">
            {console.log(menuOpen)}
            <FullMenu style={menuOpen ? menuOnStyle : menuOffStyle}/>
            {icon}
        </label>
    );
}