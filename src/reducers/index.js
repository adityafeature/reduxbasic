import counterReducer from './counter';
import loggedReducer from './isLogged';
//we need combined above reducers
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
    //es6 syntax we will use counterReducer:counterReducer
})

export default allReducers;