import React from "react";
// Components
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

const Dashboard = ({ weather }) => {
    return (
        <div className="dashboard">
            <Temperature />
            <WeatherIcon />
        </div>
    );
}

export default Dashboard;