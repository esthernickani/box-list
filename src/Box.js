import React from "react";

const Box = ( { width, height, backgroundColor, handleRemove, id }) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor
    }
    console.log(id)
    const handleBoxRemove = () => handleRemove(id)


    return (
        <div className="Box">
            <div className="Individual Box" style={boxStyle}></div>
            <button onClick={handleBoxRemove}>remove</button>
        </div>

    )
}

export default Box;