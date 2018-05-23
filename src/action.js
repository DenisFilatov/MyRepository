import { SET_APP_DATA } from './utils/actionTypes';
import { ADD_APP_DATA } from './utils/actionTypes';
import { CHANGE_FLAG_APP_DATA } from './utils/actionTypes';
import { SET_FLAGS_TRUE_APP_DATA } from './utils/actionTypes';

export function setAppData(array) {
  return {
    type: SET_APP_DATA,
    payload: array
  };
}

export function addAppData(obj) {
  return {
    type: ADD_APP_DATA,
    payload: obj
  };
}

export function changeFlagAppData(text) {
  return {
    type: CHANGE_FLAG_APP_DATA,
    payload: text
  };
}

export function setFlagsTrueAppData() {
  return {
    type: SET_FLAGS_TRUE_APP_DATA
  };
}
