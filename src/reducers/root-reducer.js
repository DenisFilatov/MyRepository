import { combineReducers } from 'redux';

import appCompReducer from './../reducer';
import currentimgReducer from '../components/currentimg/reducer'

const appReducer = combineReducers({
  appCompReducer,
  currentimgReducer
});

export default (state = {}, action) => {
  return appReducer(state, action);
}
