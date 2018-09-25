import React from 'react';
import AppHeader from './app-header.js';
import { NavLink } from 'react-router-dom'
;
let Homepage = () => 
    <div>
        <div>
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