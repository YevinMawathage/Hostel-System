import React, { useState } from 'react';
import axios from 'axios';
import "./styles/addPropertForm.css"

function AddProperty() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        rental: '',
        images: []
    });

    const handleChange = (e) => {
        if (e.target.name === 'images') {
            setFormData({ ...formData, images: e.target.files });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            if (key === 'images') {
                for (const file of formData.images) {
                    data.append('images', file);
                }
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post('/api/properties', data);
            console.log('Property added:', response.data);
            // Redirect or show success message
        } catch (error) {
            console.error('Error adding property:', error.response.data);
            // Show error message
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
            <input type="number" name="rental" value={formData.rental} onChange={handleChange} placeholder="Rental Price" required />
            <input type="file" name="images" onChange={handleChange} multiple />
            <button type="submit">Add Property</button>
        </form>
    );
}

export default AddProperty;
