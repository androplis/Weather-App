import React from "react";
// Components
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import NavBar from './NavBar';

const Dashboard = ({ weather }) => {
    return (
        <div className="dashboard">
            <NavBar />
            <Temperature temps={weather.main} />
            <WeatherIcon conditions={weather.weather} />
        </div>
    );
}

export default Dashboard;