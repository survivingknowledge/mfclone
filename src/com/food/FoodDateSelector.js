import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import './FoodDateSelector.css';

const FoodDateSelector = (props) => {

  return (
    <div className="date-selector">
      <button className="date-leftarrow" onClick={props.prevDay}><FontAwesome name='angle-left' size='2x'/></button>
      <div className="date">{fmtDate(props.current_date)}</div>
      <button className="date-rightarrow" onClick={props.nextDay}><FontAwesome name='angle-right' size='2x'/></button>
    </div>
  );
}

function fmtDate(timestamp) {
  return moment(timestamp).format('dddd MMMM Do, YYYY')
}

export default FoodDateSelector;
