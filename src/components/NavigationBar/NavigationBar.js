import React from 'react';
import './NavigationBar.css';
import logo from '../../assets/images/logo.png';

function NavigationBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="links">
                    <li><a href="#">Premium</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Download</a></li>
                    <a> |</a>
                    <li><a href="#">Sign up</a></li>
                    <li><a href="#">Log in</a></li>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
