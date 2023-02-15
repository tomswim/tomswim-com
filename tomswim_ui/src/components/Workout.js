import Sets from "./Sets";
import './Workout.css'

// const testSets = [{setNumber: 1, stroke: "freestyle", distance: 100, interval: "B + 10", quantity: "10", energy: "blue", description: "Descend 1 to 5, 6 to 10"}, 
//                   {setNumber: 2, stroke: "backstroke", distance: 200, interval: "B + 20", quantity: "5", energy: "red", description: "Steady"}, 
//                   {setNumber: 3, stroke: "IM", distance: 200, interval: "B + 30", quantity: "6", energy: "purple", description: "Work a different stroke each swim"}];



const Workout = (props) => {
  // const workout = props;
  return (
    <div className="workout">
      <div className="workout_number">
        <label>Workout ID: </label>
        {props.workout.id}
      </div>
      <div className="user_id">
        <label>User: </label>
        {props.workout.user_id}
      </div>
      <div className="workout_type">
        <label>Type: </label>
        {props.workout.type}
      </div>
      <div className="workout_description">
        <label>Description: </label>
        {props.workout.description}
      </div>
      <div className="workout_sets">
        <label>Sets: </label>
        <Sets sets={props.workout.sets}/>
      </div>
    </div>
  );
}

export default Workout;