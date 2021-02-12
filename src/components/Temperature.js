import React from 'react';

const Temperature = ({temps}) => {

    if (temps != null) {
        return (
            <div className="temp-container">
                <span className="temp">{Math.round(temps.temp,2)}º</span>
                <span className="low">L: {Math.round(temps.temp_min,2)}º</span>
                <span className="high">H: {Math.round(temps.temp_max,2)}º</span>
                <span className="feel">Feels like: {Math.round(temps.feels_like,2)}º</span>
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