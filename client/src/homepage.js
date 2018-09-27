import React from 'react';
import AppHeader from './app-header.js';
import { NavLink } from 'react-router-dom';
import './stylesheets/index.css';

let Homepage = () => 
    <div>
        <div className="homeForm">
            <AppHeader />
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            <NavLink to="/signup">
                <button>Sign up</button>
            </NavLink>
        </div>
    </div>

export default Homepage;