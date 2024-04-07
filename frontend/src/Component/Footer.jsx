import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-info">
                    <h3>NSBM Accommo</h3>
                    <p className={"footer-para"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1
                        500s, when an unknown printer took a galley of type and scrambled it to m
                        ake a type specimen book. It has survived not only five centuries, but al
                        so the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets contai
                        ning Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Explore</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                </ul>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} NSBM Accommo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
