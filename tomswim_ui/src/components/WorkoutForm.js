import axios from 'axios';
import { useState } from 'react';
import WorkoutList from "./WorkoutList"

// const testSetList = [{set_number: 1, stroke: "freestyle", distance: 100, interval: "B + 10", quantity: "10", energy: "blue", description: "Descend 1 to 5, 6 to 10"}, 
//                   {set_number: 2, stroke: "backstroke", distance: 200, interval: "B + 20", quantity: "5", energy: "red", description: "Steady"}, 
//                   {set_number: 3, stroke: "IM", distance: 200, interval: "B + 30", quantity: "6", energy: "purple", description: "Work a different stroke each swim"}];

// const testWorkout = {id: 1, user_id: 1, type: "aerobic", description: "Mixed stroke workout", sets: testSetList,};
// const testWorkout2 = {id: 2, user_id: 1, type: "IM", description: "Sprint stroke workout", sets: testSetList,};

// const testWorkoutList = [{workout: testWorkout}, {workout: testWorkout2}];
// console.log(testWorkoutList);

const WorkoutForm = () => {
  const [workouts, setWorkouts] = useState([]);
  // let workouts =[];
  // console.log({test1: "test1"});
  const handleClick = async (event) => {
    try {
      event.preventDefault();
      let workoutListFormatted = [];
      console.log('handlesubmit');
      const response = await axios.get('http://localhost:3001/swim_workouts');
      // console.log({response});
      const workoutList = response.data;
      console.log('workoutlist: ');
      console.log(workoutList);
      // setWorkouts(workoutList);
      workoutList.forEach(element => {
        console.log(element);
        workoutListFormatted.push({'workout': element});
      });
      // workouts = workoutList;
      setWorkouts(workoutListFormatted);
      console.log('workouts: ');
      console.log(workouts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          type="text"
          placeholder="Get all workouts"
          // value='Get all workouts'
        />
        <button onClick={handleClick}>Get workouts</button>
      </form>
      <div>
        Workout list
        <WorkoutList workoutList={workouts}/>
      </div>
    </div>
  );
}

export default WorkoutForm;