import React, { useState } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const addBox = boxObj => {
        setBoxes(boxes => [...boxes, boxObj])
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    return (
        <>
            <BoxForm addBox={addBox} />
            <div className='boxesContainer'>
                {boxes.map(box => <Box
                    key={box.id}
                    id={box.id}
                    color={box.color}
                    height={box.height}
                    width={box.width}
                    handleRemove={remove} />)
                }
            </div>
        </>

    )

}

export default BoxList;