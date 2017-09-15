import React from 'react';
import './FoodEntryTable.css';
import FontAwesome from 'react-fontawesome';

const FoodEntryTable = (props) => {

  const foods = props.foods.map((food, i) => {
    return (
      <tr key={i}>
        <td className='food-name'>{food.name}</td>
        <td>{food.calories}</td>
        <td>{food.carbs}</td>
        <td>{food.fat}</td>
        <td>{food.protein}</td>
        <td><a onClick={props.deleteFood.bind(this, food.id)}><FontAwesome name='trash' /></a></td>
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
        </tbody>
      </table>
    </div>
  );
}

export default FoodEntryTable;
