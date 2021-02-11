import React, { Component } from 'react';

// Components
import Dashboard from './Dashboard';

class App extends Component {

  state = {
    weather: {}
  }

  componentDidMount()  {
    this.getWeather();
  }

  getWeather = (query="45039", type="current", days="1") => {
    let url;
    if (type === "current") {
      url = `https://api.weatherapi.com/v1/current.json?key=cc1d4248f67f410a8bb230040210602&q=${query}`;
    }
    else {
      url =`https://api.weatherapi.com/v1/forecast.json?key=cc1d4248f67f410a8bb230040210602&q=${query}&days=${days}`;
    }
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ weather: data})
    });
  }

  render() {
    return (
      <div className="App">
        {/* { Main Headline } */}
        {/* Header */}
          {/* Logo*/}
          {/* {NavBar} */}
  
        <Dashboard weather={ this.state.weather } />
          {/* Temperature */}
          {/* Icon */} 
      </div>
    );
  }
}

export default App;
