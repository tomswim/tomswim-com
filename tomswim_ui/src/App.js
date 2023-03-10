// import logo from './logo.svg';
import './App.css';
import WorkoutForm from "./components/WorkoutForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// const testSetList = [{set_number: 1, stroke: "freestyle", distance: 100, interval: "B + 10", quantity: "10", energy: "blue", description: "Descend 1 to 5, 6 to 10"}, 
//                   {set_number: 2, stroke: "backstroke", distance: 200, interval: "B + 20", quantity: "5", energy: "red", description: "Steady"}, 
//                   {set_number: 3, stroke: "IM", distance: 200, interval: "B + 30", quantity: "6", energy: "purple", description: "Work a different stroke each swim"}];

// const testWorkout = {id: 1, user_id: 1, type: "aerobic", description: "Mixed stroke workout", sets: testSetList,};
// const testWorkout2 = {id: 2, user_id: 1, type: "IM", description: "Sprint stroke workout", sets: testSetList,};

// const testWorkoutList = [{workout: testWorkout}, {workout: testWorkout2}];
// console.log(testWorkoutList);

// function App() {
//   return (
//     <div className="App">
//       <WorkoutForm/>
//       {/* <Sets sets={testSetList}/> */}
//       {/* <Workout workout={testWorkout}/> */}
//       {/* <WorkoutList workoutList={testWorkoutList}/> */}
//     </div>
//   );
// }

function App() {
  return (
   
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<WorkoutForm/>}/>
            <Route path="*" element='Not Found'/>
          </Routes>
        </BrowserRouter>
    </div>
    
  );
};

export default App;

