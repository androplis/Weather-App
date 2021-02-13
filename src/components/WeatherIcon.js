import React from 'react';

const WeatherIcon = ({ conditions }) => {
    try {
        return (
            <div className="icon-container">
                <img src={`http://openweathermap.org/img/wn/${conditions[0].icon}@2x.png`} alt="Weather Icon"/>
            </div>
        );
    }
    catch (error) {
        return (
            <div>
                Loading...
            </div>
        );
    }

}

export default WeatherIcon;