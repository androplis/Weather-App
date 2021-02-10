import React, { Component } from 'react';

// Components
import Dashboard from './Dashboard';

class App extends Component {

  state = {
    weather: []
  }

  componentDidMount()  {
    this.getWeather();
  }

  getWeather = (query="45039", type) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=cc1d4248f67f410a8bb230040210602&q=${query}`;
  }

  render() {
    return (
      <div className="App">
        {/* { Main Headline } */}
        {/* Header */}
          {/* Logo*/}
          {/* {NavBar} */}
  
        <Dashboard />
          {/* Temperature */}
          {/* Icon */} 
      </div>
    );
  }
}

export default App;
