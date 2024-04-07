import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router v6
import './css/registrationPage.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student', // Default role is set to 'student'
    });

    // Use useNavigate hook for navigation
    const navigate = useNavigate();

    const { name, email, password, role } = formData;

    // Function to handle changes in the form inputs
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Function to handle form submission
    const onSubmit = async e => {
        e.preventDefault();

        let [firstname, ...lastname] = name.split(' ');
        lastname = lastname.join(' ') || ''; // Handle single name entries

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            // Prepare the request body
            const body = JSON.stringify({ firstname, lastname, email, password, role });

            // Post data to the server
            await axios.post(`${process.env.REACT_APP_API_PATH}/users/register`, body, config);

            // Show success alert and redirect to login page
            swal("Good job!", "Registration successful", "success")
                .then(() => {
                    navigate('/LoginPage'); // Navigate to login page
                });

        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            // Show error alert if registration fails
            swal("Registration failed", errorMessage, "error");
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <select name="role" value={role} onChange={onChange}>
                        <option value="student">Student</option>
                        <option value="landlord">Landlord</option>
                        <option value="warden">Warden</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
