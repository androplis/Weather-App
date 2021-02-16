import React from "react";
import {Switch, Route} from 'react-router-dom';
// Components
import NowView from './Views/NowView';
import HourView from './Views/HourView';
import TenDayView from './Views/TenDayView';
import NavBar from './NavBar';

const Dashboard = ({ weather, getWeather }) => {
    return (
        <div className="dashboard">
            <NavBar />
            <Switch>
                <Route
                    path='/'
                    render={props => (<NowView weather={weather.current} isAuthed={true} />)}
                    exact 
                />
                <Route
                    path='/hour'
                    render={props => (<HourView getWeather={getWeather} isAuthed={true} />)}
                />
                <Route
                    path='/tenday'
                    render={props => (<TenDayView weather={weather} isAuthed={true} />)}
                />
                {/* <Route component={Error} /> */}
            </Switch>
        </div>
    );
}

export default Dashboard;