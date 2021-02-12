import React from "react";
// Components
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

const Dashboard = ({ weather }) => {
    console.log(weather);
    return (
        <div className="dashboard">
            <Temperature temps={weather.main} />
            <WeatherIcon conditions={weather.weather} />
        </div>
    );
}

export default Dashboard;