import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from './Box'
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }


    const handleRemove= (id) => {
        const newBoxList = boxes.filter(box => box.id !== id)
        setBoxes(newBoxList)
    }

    const boxComponents = boxes.map(({ id, width, height, backgroundColor }) => <Box width={width} height={height} backgroundColor={backgroundColor} key={id} id={id} handleRemove={handleRemove} />)

    return (
        <div>
            <h1>Boxes</h1>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    )
}

export default BoxList;