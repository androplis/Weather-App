import React from "react";
// Components
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

const Dashboard = ({ weather }) => {
    console.log(weather);
    return (
        <div className="dashboard">
            <Temperature conditions={weather.current} />
            <WeatherIcon />
        </div>
    );
}

export default Dashboard;