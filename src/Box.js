import React, { useState } from 'react'

const Box = ({ color = "blue", height = 5, width = 5, id, handleRemove }) => {
    const remove = () => handleRemove(id);
    return (
        <div style={{
            backgroundColor: color,
            height: `${height}em`,
            width: `${width}em`,
        }} >
            <button onClick={remove}>X</button>
        </div >
    )
}

export default Box