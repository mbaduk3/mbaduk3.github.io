import React from 'react'

export default (props) => {
 
    const hamburgerIconStyle = {
        "position": "relative",
        "width": "23px",
        "height": "19px",
        "fontSize": "2.5rem",
        "top": "-16px",
        "zIndex": "102",
    };

    var iconColor = props.menu.open ? "var(--background)" : "var(--primary-color)";

    const icon = 
        <div 
            className="hamburger-icon" 
            style={{...hamburgerIconStyle, "color": iconColor}}
            onClick={() => {
                props.menu.set(!props.menu.open);
                Object.assign(document.getElementsByTagName("BODY")[0].style, {"overflow": (props.menu.open ? "scroll" : "hidden")});
                }}>
                { props.menu.open ? "x"  : "=" }
        </div>

    return (
        <label className="hamburger-label">
            {/* {console.log(props.menu.open)} */}
            {icon}
        </label>
    );
}