import React from 'react'

const customLink = (props) => {

    const style = {
        "cursor": "pointer",
    }

    const handleClick = () => {}

    return <p style={style} onClick={handleClick}>{props.text}</p>
}

export default customLink;