import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';


function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="column footer-logo">
                        <i className="fab fa-spotify" />
                        <h1 className="sportify">Spotify</h1>
                    </div>
                <div className="column">
                    <h1>Company</h1>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>For the Record</p>
                </div>
                <div className="column">
                    <h1>Communities</h1>
                    <p>For Artists</p>
                    <p>Developers</p>
                    <p>Brands</p>
                    <p>Investors</p>
                    <p>Vendors</p>
                </div>
                <div className="column">
                    <h1>Useful Links</h1>
                    <p>Help</p>
                    <p>Web Player</p>
                    <p>Free Mobile App</p>
                </div>
                <div className="column footer-icons">
                    <i className="fab fa-instagram" />
                    <i className="fab fa-facebook" />
                    <i className="fab fa-twitter" />
                </div>
                </div>
            </footer>
            <div className="footer">
                <div className="container">
                    <div className="left">
                        <p>Legal</p>
                        <p>Privacy Center</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                        <p>About Ads</p>
                    </div>
                    <div className="right">
                        <a href="group.html">Vietnam</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
