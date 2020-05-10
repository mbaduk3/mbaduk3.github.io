import React, { useEffect, useState } from 'react'

export default (props) => {

    // const [rMargin, updateRMargin] = useState(loadRMargin());

    // useEffect(() =>  {
    //     function update() { updateRMargin(loadRMargin()) }
    //     window.addEventListener("resize", update);
    //     return window.removeEventListener("resize", update);
    // }, []);

    // function loadRMargin() {return getComputedStyle(document.getElementsByClassName("site-wrapper")[0])["margin-right"];}

    // console.log(rMargin);
    // const style = "40px " + rMargin + " " + "40px " + rMargin;

    // style={{"padding": style}

    var style = props.menu.open ? {"opacity": "1", "z-index": "100"} : {"opacity": "0", "z-index": "-1"};

    return (
        <div className={"full-menu-div"} style={style}>
            <div className={"full-menu-opt"}>
                <a href="/">Home</a>
                </div>
            <div className={"full-menu-opt"}>
                <a href="/portfolio">Portfolio</a>
            </div>
            <div className={"full-menu-opt"}>
                <a href="/all_work">All Work</a>
            </div>
        </div>
    )
}