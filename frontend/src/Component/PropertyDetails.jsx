// In PropertyDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../Pages/Data/properties.json'; // Adjust the path as necessary
import "./styles/ropertyDetails.css"

const PropertyDetails = () => {
    let { id } = useParams(); // This hooks allows us to access the URL parameters
    id = parseInt(id); // Ensure the id is an integer, if your IDs in properties.json are integers

    // Find the property in your properties array
    const property = properties.find(prop => prop.id === id);

    // If the property wasn't found, you can return a simple message or a custom 404 component
    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <div className="property-details">
            <img src={property.image} alt={property.location} className="detail-image" />
            <h2>{property.location}</h2>
            <p className="detail-price">Rs.{property.prices}/=</p>
            {/* Add additional property details here */}
        </div>
    );
};

export default PropertyDetails;
