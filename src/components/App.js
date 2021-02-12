import React, { Component } from 'react';
import '../styles/App.css';

// Components
import Dashboard from './Dashboard';
import Header from './Header';

class App extends Component {

  state = {
    weather: {}
  }

  componentDidMount()  {
    this.getWeather();
  }

  getWeather = (query = "Maineville", type = "city") => {
    let url = "";

    try {
      if (type === "city") {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=8b53bede6fbe3e0f12791e98c95016d5&units=imperial`;
      }
      else if (type === "zip") {
        url = `http://api.openweathermap.org/data/2.5/weather?zip=${query}&appid=8b53bede6fbe3e0f12791e98c95016d5&units=imperial`;
      }
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
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Header />
          {/* Logo*/}
          {/* {NavBar} */}
  
        <Dashboard weather={ this.state.weather } />
      </div>
    );
  }
}

export default App;
