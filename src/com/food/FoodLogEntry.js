import React, { Component } from 'react';

import moment from 'moment';
import FoodDateSelector from './FoodDateSelector';
import FoodEntryTable from './FoodEntryTable';
import './FoodLogEntry.css';

class FoodLogEntry extends Component {

  state = {
    current_date: Date.now(),
    food_entries: [
      {
        id: Math.floor(Math.random() * 1000),
        name: 'Random Food' + Math.random() * 100,
        calories: 587,
        carbs: 14,
        fat: 8,
        protein: 2,
      },
      {
        id: Math.floor(Math.random() * 1000),
        name: 'Random Food' + Math.random() * 100,
        calories: 587,
        carbs: 14,
        fat: 8,
        protein: 2,
      },
      {
        id: Math.floor(Math.random() * 1000),
        name: 'Random Food' + Math.random() * 100,
        calories: 587,
        carbs: 14,
        fat: 8,
        protein: 2,
      },
    ]
  }

  selectNextDay = () => {
    let nextDay = moment(this.state.current_date).add(1, 'days');
    this.setState({ current_date: nextDay });
  };

  selectPrevDay = () => {
    let prevDay = moment(this.state.current_date).subtract(1, 'days');
    this.setState({ current_date: prevDay });
  };

  deleteFoodEntry = (foodid, ev) => {
    ev.preventDefault();
    const nextFoods = this.state.food_entries.filter((food) => food.id !== foodid);
    this.setState({
      food_entries: nextFoods
    });
  };

  render() {
    return (
      <div className='foodlog-entry'>
        <div>
          <FoodDateSelector current_date={this.state.current_date} nextDay={this.selectNextDay} prevDay={this.selectPrevDay} />
        </div>
        <FoodEntryTable foods={this.state.food_entries} deleteFood={this.deleteFoodEntry}/>
      </div>
    );
  }
}

export default FoodLogEntry;
