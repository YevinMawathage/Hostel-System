import React from 'react';
import { Link } from 'react-router-dom';
import './css/HomePage.css';
import PropertyListing from "../Component/PropertyListing"; // Importing the CSS file

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to NSBM Accommodation Service</h1>
            <p>
                Find or offer accommodation near NSBM Green University. Our platform connects students with landlords directly, under the supervision of the university's warden.
            </p>

            <div className="user-actions">
                <PropertyListing />
            </div>
        </div>
    );
};

export default HomePage;
