import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Correct path assumption

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className={`navbar-container ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="navbar-logo">
                    NSBM Accommo
                </Link>
                <div className="navbar-hamburger" onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/PropertListing">Explore</Link>
                    <Link to="/ContactUs">Contact</Link>
                </div>
                <div className="navbar-auth">
                    <Link to="/LoginPage" className="auth-btn">Sign In</Link>
                    <Link to="/Register" className="auth-btn auth-btn-signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
