// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import WorkoutForm from "./components/WorkoutForm";

function App() {
  console.log({test3: "test3"});
  return (
    <div className="App">
      <WorkoutForm/>
    </div>
  );
}

export default App;

