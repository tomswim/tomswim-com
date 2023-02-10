// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const GetWorkoutsForm = () => {
  const [workouts, setWorkouts] = useState('no workouts yet');
  
  const handleSubmit = async (event) => {
    // console.log('handlesubmit');
    const response = await axios.get('http://localhost:3001/swim_workouts');
    const data = await response.json();
    setWorkouts(data);
    //setWorkouts('got workouts');
    // console.log(response.data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Get all workouts"
          // value='Get all workouts'
        />
        <button>Get workouts</button>
      </form>
      <div>
        {workouts}
      </div>
    </div>
  );
}

function App() {
  
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
