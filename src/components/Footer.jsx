import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Import CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>PerScholas Columbus Women in Software Engineering Cohort 8 Jan-may2024 </h3>
                        <h4>Trainer: Christina Takara & Created by Jayshree Morey</h4>
                        <p>Email: jayshreematre@gmail.com </p>
                        <h4>Connect with us on </h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a> 
                            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a> 
                            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
