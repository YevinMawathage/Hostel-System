import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/PropertyDetails.css';
import Navbar from "../Component/Navbar"; // Ensure the path is correct
import Footer from "../Component/Footer"; // Ensure the path is correct
import properties from '../Pages/Data/properties.json'; // Ensure the path is correct

function PropertyDetails() {
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [requestSent, setRequestSent] = useState(false); // State to manage reservation request status
    const { id } = useParams(); // This hook allows us to access the URL parameters

    useEffect(() => {
        const property = properties.find(p => p.id.toString() === id);
        if (property) {
            setPropertyDetails(property);
        } else {
            console.error('Property not found');
        }
    }, [id]);

    // Function to handle reservation request
    const handleReservationRequest = () => {
        setRequestSent(true); // Simulate sending a reservation request
        setTimeout(() => {
            setRequestSent(false); // Optionally hide the message after 5 seconds
        }, 5000);
    };

    if (!propertyDetails) return <div>Loading...</div>;

    return (
        <div className="property-details-page">
            <div className="property-details-container">
                <div className="property-image-container">
                    <img src={propertyDetails.image} alt="Property" className="property-image"/>
                </div>
                <div className="property-info-container">
                    <h1 className="property-location">{propertyDetails.location}</h1>
                    <p className="property-info">{propertyDetails.info}</p>
                    <p className="property-price">Price: Rs.{propertyDetails.prices}/=</p>
                </div>
                <button className="reservation-button" onClick={handleReservationRequest}>
                    Send Reservation Request
                </button>
                {requestSent && <p className="reservation-message">Reservation request has been sent.</p>}
            </div>
        </div>
    );
}

export default PropertyDetails;
