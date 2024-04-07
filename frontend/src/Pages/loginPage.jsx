import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './css/loginPage.css';

function Login() {
    // State for login form, 2FA code, and to check if it's the 2FA verification stage
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        twoFactorCode: '',
    });
    const [isTwoFactorStage, setIsTwoFactorStage] = useState(false);

    // Destructure formData for easy access
    const { email, password, twoFactorCode } = formData;

    // useNavigate hook for redirection
    const navigate = useNavigate();

    // Handles form field changes
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Handles form submission
    const onSubmit = async e => {
        e.preventDefault();
        if (!isTwoFactorStage) {
            // Initial login attempt
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                const body = JSON.stringify({ email, password });
                await axios.post(`${process.env.REACT_APP_API_PATH}/users/login`, body, config);
                setIsTwoFactorStage(true); // Move to 2FA stage after successful initial login
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.message || 'Something went wrong!',
                });
            }
        } else {
            // 2FA code verification attempt
            await verifyTwoFactorCode();
        }
    };

    // Verify the 2FA code
    const verifyTwoFactorCode = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ email, twoFactorCode });
            const response = await axios.post(`${process.env.REACT_APP_API_PATH}/users/login2fa`, body, config);
            console.log(response.data);
            localStorage.setItem('jwtToken', response.data.token);
            const token = localStorage.getItem("jwtToken");
            console.log(token);
            Swal.fire('Success', response.data.message, 'success').then((result) => {
                if (result.isConfirmed) {
                    navigate('/'); // Redirect to homepage on success
                }
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="login-container">
            <h2>{isTwoFactorStage ? 'Enter 2FA Code' : 'Login'}</h2>
            <form onSubmit={e => onSubmit(e)}>
                {!isTwoFactorStage ? (
                    // Login form
                    <>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                    </>
                ) : (
                    // 2FA code input
                    <div>
                        <input
                            type="text"
                            placeholder="2FA Code"
                            name="twoFactorCode"
                            value={twoFactorCode}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{isTwoFactorStage ? 'Verify Code' : 'Login'}</button>
            </form>
        </div>
    );
}

export default Login;
