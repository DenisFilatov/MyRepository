import { SET_APP_DATA } from './utils/actionTypes';
import { ADD_APP_DATA } from './utils/actionTypes';

export function getAppData(data) {
  return {
    type: SET_APP_DATA,
    payload: data
  };
}

export function addAppData(data) {
  return {
    type: ADD_APP_DATA,
    payload: data
  };
}
