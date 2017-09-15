import React, { Component } from 'react';

import moment from 'moment';
import FoodDateSelector from './FoodDateSelector';

class FoodLogEntry extends Component {

  state = {
    current_date: Date.now()
  }

  selectNextDay = () => {
    let nextDay = moment(this.state.current_date).add(1, 'days');
    this.setState({ current_date: nextDay });
  };

  selectPrevDay = () => {
    let prevDay = moment(this.state.current_date).subtract(1, 'days');
    this.setState({ current_date: prevDay });
  }

  render() {
    return (
      <div>
        <FoodDateSelector current_date={this.state.current_date} nextDay={this.selectNextDay} prevDay={this.selectPrevDay} />
      </div>
    );
  }
}

export default FoodLogEntry;
