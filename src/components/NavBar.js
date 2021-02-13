import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                    <NavLink exact to="/" activeClassName="selected">NOW</NavLink>
                    <NavLink to="/hour" activeClassName="selected">HOURLY</NavLink>
                    <NavLink to="/tenday" activeClassName="selected">10 DAY</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;