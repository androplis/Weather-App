import React from 'react';

const Temperature = ({temps}) => {
    console.log(temps);
    if (temps != null) {
        return (
            <div className="temp-container">
                <span className="temp">{Math.round(temps.temp,2)}ºF</span>
                <span className="low">Low: {Math.round(temps.temp_min,2)}º</span>
                <span className="high">High: {Math.round(temps.temp_max,2)}º</span>
                <span className="humid">Humidity: {temps.humidity}º</span>
                <span className="feels-like">Feels like {Math.round(temps.feels_like,2)}º</span>
            </div>
        );
    }   
    else {
        return (
            <div className="error">Loading...</div>
        );
    }
}

export default Temperature;