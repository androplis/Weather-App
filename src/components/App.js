import React, { Component } from 'react';
import '../styles/App.css';

// COMPONENTS
import Dashboard from './Dashboard';
import Header from './Header';

// API KEYS
const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_API;
const positionStackApiKey = process.env.REACT_APP_POSITIONSTACK_API;

class App extends Component {

  state = {
    weather: {}
  }

  componentDidMount()  {
    this.getWeather();
  }

  getCoords = (query = "Maineville") => {
  }


  getWeather = (query = "Maineville", type = "city") => {
    let url = "";
    let lat = "33.441792";
    let lon = "-94.037689";

    try {
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,alerts}&appid=${openWeatherApiKey}&units=imperial`;
    }
    catch (error) {
      console.log(error.message);
    }
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ weather: data})
    });
  }

  
  render() {
    console.log(this.state.weather);
    return (
      <div className="App">
          {/* <Header onSearch={this.getWeather} />
          <Dashboard weather={ this.state.weather } getWeather={this.getWeather}/> */}
      </div>
    );
  }
}

export default App;
