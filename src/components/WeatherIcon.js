import React from 'react';

const WeatherIcon = ({ conditions }) => {
    try {
        return (
            <div>
                <img src={`http://openweathermap.org/img/wn/${conditions[0].icon}@2x.png`}/>
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