import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width" >Width</label>
            <input
                id="width"
                type="number"
                name="width"
                placeholder="Width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height" >height</label>
            <input
                id="height"
                type="number"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="backgroundColor" >Background Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value= {formData.backgroundColor}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default NewBoxForm;;