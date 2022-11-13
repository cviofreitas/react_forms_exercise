import React, { useState } from 'react'

const BoxForm = ({ addBox }) => {

    const [formData, setFormData] = useState({
        color: 'black', width: '5', height: '5'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        addBox(formData)

    }
    return (
        <form className='BoxForm'>
            <div>
                <input
                    id="colorSelector"
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="range"
                    id='heightSelector'
                    min="1"
                    max="10"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor='height'>Height</label>
            </div>

            <div>
                <input
                    type="range"
                    id='widthSelector'
                    min="1"
                    max="10"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor='width'>Width</label>
            </div>
            <div>
                <button onClick={handleSubmit}>Create Box</button>
            </div>
        </form >
    )
}

export default BoxForm