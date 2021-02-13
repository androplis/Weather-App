import React from "react";
// Components
import Temperature from "../Temperature";
import WeatherIcon from "../WeatherIcon";

const NowView = ({weather}) => {
    return (
        <div className="now-view">
            <Temperature temps={weather.main} />
            <WeatherIcon conditions={weather.weather}/>
        </div>
    );
}

export default NowView;