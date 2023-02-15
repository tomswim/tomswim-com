import Workout from "./Workout";

// const testSets = [{setNumber: 1, stroke: "freestyle", distance: 100, interval: "B + 10", quantity: "10", energy: "blue", description: "Descend 1 to 5, 6 to 10"}, 
//                   {setNumber: 2, stroke: "backstroke", distance: 200, interval: "B + 20", quantity: "5", energy: "red", description: "Steady"}, 
//                   {setNumber: 3, stroke: "IM", distance: 200, interval: "B + 30", quantity: "6", energy: "purple", description: "Work a different stroke each swim"}];

// const Sets = () => {
//   const [sets, setSets] = useState(testSets);
//   return (
//     <div className="sets">
//       {sets.map(set => <Set key={set.setNumber} {...set}/>)}
//     </div>
//   );
// }

const Workouts = (props) => (
    <div className="workouts">
      {props.workoutList.map(workout => <Workout key={workout.id} {...workout}/>)}
    </div>
);

export default Workouts;