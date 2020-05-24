import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"

export default (props) => {

    const [rMargin, updateRMargin] = useState("0px");

    useEffect(() =>  {
        window.addEventListener("resize", handleResize);
        window.addEventListener("DOMContentLoaded", handleResize);
        window.addEventListener("hashchange", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("DOMContentLoaded", handleResize);
            window.removeEventListener("hashchange", handleResize);
        }
    }, []);

    function handleResize() { updateRMargin(loadRMargin()); }
    function loadRMargin() { return getComputedStyle(document.getElementsByClassName("site-wrapper")[0])["margin-right"]; }

    var marginStyle = {"padding": "40px " + rMargin + " 40px " + rMargin};
    var dispStyle = props.menu.open ? {"opacity": "1", "zIndex": "100"} : {"opacity": "0", "zIndex": "-1"};
    var style = {...marginStyle, ...dispStyle};

    function handleLinkClick() { 
        props.menu.set(false); 
        Object.assign(document.getElementsByTagName("BODY")[0].style, {"overflow": "scroll"});
    }

    return (
        <div className={"full-menu-div"} style={style}>
            <div className={"full-menu-opt"}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                </div>
            <div className={"full-menu-opt"}>
                <Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
            </div>
            <div className={"full-menu-opt"}>
                <Link to="/all_work" onClick={handleLinkClick}>All Work</Link>
            </div>
        </div>
    );
}