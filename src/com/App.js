import React, { Component } from 'react';
import './App.css';

import FoodLogEntry from './food/FoodLogEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodLogEntry />
      </div>
    );
  }
}

export default App;
