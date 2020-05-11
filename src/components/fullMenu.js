import React, { useEffect, useState } from 'react'

export default (props) => {

    const [rMargin, updateRMargin] = useState(18);

    useEffect(() =>  {
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        window.addEventListener("hashchange", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
            window.removeEventListener("hashchange", handleResize);
        }
    }, []);

    function handleResize() { updateRMargin(loadRMargin()); }
    function loadRMargin() {return getComputedStyle(document.getElementsByClassName("site-wrapper")[0])["margin-right"];}

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
                <a href="#" onClick={handleLinkClick}>Home</a>
                </div>
            <div className={"full-menu-opt"}>
                <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
            </div>
            <div className={"full-menu-opt"}>
                <a href="#allwork" onClick={handleLinkClick}>All Work</a>
            </div>
        </div>
    );
}