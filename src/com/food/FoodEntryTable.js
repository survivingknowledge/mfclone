import React from 'react';
import './FoodEntryTable.css';
import FontAwesome from 'react-fontawesome';

const FoodEntryTable = ({ foods, goal, deleteFood }) => {

  //initial object needs to include properties that we add, else will return as NaN value
  const totals = foods.reduce((acc, valObj) => {
    return Object.assign({}, acc, {
      calories: acc["calories"] + valObj["calories"],
      carbs: acc["carbs"] + valObj["carbs"],
      fat: acc["fat"] + valObj["fat"],
      protein: acc["protein"] + valObj["protein"],
    })
  }, {calories: 0, carbs: 0, fat: 0, protein: 0});

  const myfoods = foods.map((food, i) => {
    return (
      <tr key={i} className='foodentry'>
        <td className='food-name'>{food.name}</td>
        <td>{food.calories}</td>
        <td>{food.carbs}</td>
        <td>{food.fat}</td>
        <td>{food.protein}</td>
        <td><a  className='delete-button' onClick={deleteFood.bind(this, food.id)}><FontAwesome name='trash' /></a></td>
      </tr>
    );
  })

  return (
    <div className='food-entry-table'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th><div>Calories</div><span>(kcal)</span></th>
            <th><div>Carbs</div><span>(g)</span></th>
            <th><div>Fat</div><span>(g)</span></th>
            <th><div>Protein</div><span>(g)</span></th>
          </tr>
        </thead>
        <tbody>
          {myfoods}
          <tr>
            <td>Totals</td>
            <td>{totals.calories}</td>
            <td>{totals.carbs}</td>
            <td>{totals.fat}</td>
            <td>{totals.protein}</td>
          </tr>
          <tr>
            <td>Your Daily Goal</td>
            <td>{goal.calories}</td>
            <td>{goal.carbs}</td>
            <td>{goal.fat}</td>
            <td>{goal.protein}</td>
          </tr>
          <tr>
            <td>Remaining</td>
            <td>{goal.calories - totals.calories}</td>
            <td>{goal.carbs - totals.carbs}</td>
            <td>{goal.fat - totals.fat}</td>
            <td>{goal.protein - totals.protein}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FoodEntryTable;
