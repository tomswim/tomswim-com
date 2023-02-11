// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const GetWorkoutsForm = () => {
  const [workouts, setWorkouts] = useState('no workouts yet');
  // console.log({test1: "test1"});
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handlesubmit');
    const response = await axios.get('http://localhost:3001/swim_workouts');
    console.log(response);
    const workouts = response.data;
    // console.log({test2: "test2"});
    // console.log('response: ',{workouts});
    // console.log('data: ', workouts);
    setWorkouts(JSON.stringify(workouts));
    // setWorkouts('got workouts');
    // console.log(response.data);
  }

  // const handleSubmit = () => {
  //   console.log('handlesubmit');
  //   axios.get('http://localhost:3001/swim_workouts')
  //     .then(response => {
  //       return response.data
  //     })
  //     .then(data => {
  //       setWorkouts(data)
  //     })
  //   //setWorkouts('got workouts');
  //   // console.log(response.data);
  // }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          type="text"
          placeholder="Get all workouts"
          // value='Get all workouts'
        />
        <button onClick={handleSubmit}>Get workouts</button>
      </form>
      <div>
        {workouts}
      </div>
    </div>
  );
}

function App() {
  console.log({test3: "test3"});
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <GetWorkoutsForm/>
    </div>
  );
}

export default App;

