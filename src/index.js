import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*Store -> GLOBALIZED STATE exercise
//step 1 create a store, wehave created globalized state
import {createStore} from 'redux';


//ACTION INCREMENT-describe what you want to do ex:your are hungry
const increment = () => {
  return {
    //usally we will use type but we can use any name we want
    type:"INCREMENT"
  }
}
const decrement = () => {
  return {
    type:"DECREMENT"
  }
}
//REDUCER will take all the actions related to the counter
const counter = (state = 0,action) => {
  switch(action.type){
  //counter will return piece of object, we need add 2 parameters (what will be initial state of the counter) 
    case "INCREMENT":
      return state + 1;
      case "DECREMENT":
        return state -1;   
}
};
//we can actually add a store 
let store = createStore(counter);

//to display in console
store.subscribe(() => console.log(store.getState()));

//DISPATCH (wecan dispatch as many we want)
store.dispatch(increment());
store.dispatch(decrement());
//store.dispatch(increment());
//store.dispatch(increment());

*/

/*for single reducers we can like below, if we have multiple reducers
 we need to use combine reducers
 it will take all reducers and combined as one reducers
import {createStore} from 'redux';
const store = createStore(counterReducer)
const store = createStore(counterReducer, isLoggedReducer)*/

import {createStore} from 'redux';
//no need to add index because webpack will automatically look at the index.js folder
import allReducer from './reducers';
//we need import provider from react redux, it will connects global store to entire app
import {Provider} from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <React.StrictMode>
    {/* wrap everything with provider it will connects global store for entire app */}
   <Provider store={store} >
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

//we have one piece of state which is counter, we can have multiple reducers depending on the 
//redux can has a lot of boiler plate whenever we have a small project it may not be worth it
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
