import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                    <NavLink to="/" class="link" activeClassName="selected">NOW</NavLink>
                    <NavLink to="/hour" class="link" activeClassName="selected">HOURLY</NavLink>
                    <NavLink to="/tenday" class="link" activeClassName="selected">10 DAY</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;