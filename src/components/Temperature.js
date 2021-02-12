import React from 'react';

const Temperature = ({conditions}) => {
    return (
        <div className="temp-container">
            <span className="temp">{conditions.temp_f}ºF</span>
            <span className="humidity">Humidity: {conditions.humidity}%</span>
            <span className="feels-like">Feels like {conditions.feelslike_f}º</span>
        </div>
    );
}

export default Temperature;