import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import properties from '../Pages/Data/properties.json'; // Adjust the path if necessary
import './styles/PropertyLisitng.css'
import PropertyDetails from "./PropertyDetails";
const PropertyListing = () => {
    return (
        <div className="property-listings">
            {properties.map((property) => (
                <div className="property-card" key={property.id}>
                    <img src={property.image} alt="Property" className="property-image" />
                    <div className="property-info">
                        <h3>{property.location}</h3>
                        <p className="card-price">Rs.{property.prices}/=</p>
                        <button className='view-button'>
                            <Link to={`/property/${property.id}`}>
                                <span className="view-word">
                                  View
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PropertyListing;
