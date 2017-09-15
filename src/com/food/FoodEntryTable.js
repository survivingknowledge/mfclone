import React from 'react';
import './FoodEntryTable.css';
import FontAwesome from 'react-fontawesome';

const FoodEntryTable = (props) => {

  //initial object needs to include properties that we add, else will return as NaN value
  const totals = props.foods.reduce((acc, valObj) => {
    return Object.assign({}, acc, {
      calories: acc["calories"] + valObj["calories"],
      carbs: acc["carbs"] + valObj["carbs"],
      fat: acc["fat"] + valObj["fat"],
      protein: acc["protein"] + valObj["protein"],
    })
  }, {calories: 0, carbs: 0, fat: 0, protein: 0});

  const foods = props.foods.map((food, i) => {
    return (
      <tr key={i}>
        <td className='food-name'>{food.name}</td>
        <td>{food.calories}</td>
        <td>{food.carbs}</td>
        <td>{food.fat}</td>
        <td>{food.protein}</td>
        <td><a  className='delete-button' onClick={props.deleteFood.bind(this, food.id)}><FontAwesome name='trash' /></a></td>
      </tr>
    );
  })

  return (
    <div className='food-entry-table'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th><div>Calories</div><span>kcal</span></th>
            <th><div>Carbs</div><span>g</span></th>
            <th><div>Fat</div><span>g</span></th>
            <th><div>Protein</div><span>g</span></th>
          </tr>
        </thead>
        <tbody>
          {foods}
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Totals</td>
            <td>{totals.calories}</td>
            <td>{totals.carbs}</td>
            <td>{totals.fat}</td>
            <td>{totals.protein}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FoodEntryTable;
