import React from 'react';
import axios from 'axios';
import "./styles/reservation.css"

function ManageReservation({ reservationId }) {
    const handleStatusChange = async (newStatus) => {
        try {
            const response = await axios.patch(`/api/reservations/${reservationId}`, { status: newStatus });
            console.log('Reservation Status Updated:', response.data);
            // Handle success (e.g., update the UI accordingly)
        } catch (error) {
            console.error('Error updating reservation status:', error.response.data);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div>
            <h3>Manage Reservation</h3>
            <button onClick={() => handleStatusChange('accepted')}>Accept</button>
            <button onClick={() => handleStatusChange('rejected')}>Reject</button>
        </div>
    );
}

export default ManageReservation;
