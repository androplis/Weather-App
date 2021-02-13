import React from 'react';
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                {/* <li>NOW</li>
                <li>HOURLY</li>
                <li>10 DAY</li> */}
                <Router>
                    <NavLink to="/" class="link" activeClassName="selected">NOW</NavLink>
                    <NavLink to="/" class="link" activeClassName="selected">HOURLY</NavLink>
                    <NavLink to="/" class="link" activeClassName="selected">10 DAY</NavLink>
                </Router>

            </ul>
        </nav>
    );
}

export default NavBar;