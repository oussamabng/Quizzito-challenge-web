import React from 'react'

//? import screens
import Quiz from "./screens/Quiz";
import End from "./screens/End";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
           <Route exact path="/" component={Quiz} />
           <Route exact path="/end" component={End} /> 
    </Switch> 
    </Router>
  );
}

export default App;
