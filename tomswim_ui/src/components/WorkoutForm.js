import axios from 'axios';
import { useState } from 'react';

const WorkoutForm = () => {
  const [workouts, setWorkouts] = useState('no workouts yet');
  // console.log({test1: "test1"});
  const handleClick = async (event) => {
    try {
      event.preventDefault();
      console.log('handlesubmit');
      const response = await axios.get('http://localhost:3001/swim_workouts');
      console.log({response});
      const workouts = response.data;
      setWorkouts(JSON.stringify(workouts));
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
        {workouts}
      </div>
    </div>
  );
}

export default WorkoutForm;