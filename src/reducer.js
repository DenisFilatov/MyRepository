import { SET_APP_DATA } from './utils/actionTypes';
import { ADD_APP_DATA } from './utils/actionTypes';
import { CHANGE_FLAG_APP_DATA } from './utils/actionTypes';
import { ChangeFlagOnArray } from './utils/fetcher.js';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_APP_DATA: {
      return {
        ...state,
        array: action.payload
      };
    }
    case ADD_APP_DATA: {
      let arr = [...state.array];
      arr.push(action.payload);
      return {
        ...state,
        array: arr
      };
    }
    case CHANGE_FLAG_APP_DATA: {
      let arr = ChangeFlagOnArray(state.array, action.payload);
      return {
        ...state,
        array: arr
      };
    }
    default: {
      return state;
    }
  }
};
