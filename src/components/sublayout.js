import React, { useState } from 'react'

export default (props) => {

    const [activeOptIndex, setOptIndex] = useState(0);

    var opts = props.options == null ? null : props.options.map((opt, i) => {
        let clsName = activeOptIndex === i ? "sublayout-option-active" : "sublayout-option";
        let item = <li 
            key={opt.name + "_" +  i} 
            className={clsName}
            onClick={()=>setOptIndex(i)}>
                {opt.name}
            </li>
        return item;
    });

    return (
        <div className="sublayout">
            <div className="options-box left">
                <h1>{props.pageTitle}</h1>
                <ul className="sublayout-opts-list">{opts}</ul>
            </div>
            {props.children[activeOptIndex]}
        </div>
    );
}