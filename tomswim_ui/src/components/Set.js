import { useState } from 'react';
import './Set.css'

// const testSet = {setNumber: 1, stroke: "freestyle", distance: 100, interval: "B + 10", quantity: "10", energy: "blue", description: "Descend 1 to 5, 6 to 10"}

const Set = (props) => {
  // const [set, setSet] = useState(props.set);
  // const set = props.set;
  const set = props;
  return (
    <div className="set">
      <div className="set_number">
        <label>Set: </label>
        {set.set_number}
      </div>
      <div className="stroke">
        <label>Stroke: </label>
        {set.stroke}
      </div>
      <div className="quantity">
        <label>Quantity: </label>
        {set.quantity}
      </div>
      <div className="distance">
        <label>Distance: </label>
        {set.distance}
      </div>
      <div className="interval">
        <label>Interval: </label>
        {set.interval}
      </div>
      <div className="energy">
        <label>Energy Level: </label>
        {set.energy}
      </div>
      <div className="description">
        <label>Details: </label>
        {set.description}
      </div>
    </div>
  );
}

export default Set;