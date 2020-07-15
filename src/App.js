import React from 'react';
//basic we can access any component we want to access wea can run
//to access a piece of state we need to use below
//we need import useDispatch it gives us ability to dispatch
import { useSelector, useDispatch } from 'react-redux';
//we need to import our action
import {increment, decrement} from './actions';

function App() {
  //I can extract counter from my state
 const counter = useSelector(state => state.counter);
 const isLogged = useSelector(state => state.isLogged);
//we are calling dispatch here
const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>App component</h3>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {/* what if we have argument 5! we want to multiply by5 then}
      <button onClick={() => dispatch(increment(5))}>+</button> */}

      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information not accessed</h3> : " "}
    </div>
  );
}

export default App;

