import { SET_APP_DATA } from './utils/actionTypes';
import { ADD_APP_DATA } from './utils/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_APP_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    case ADD_APP_DATA: {
      let arr = [...state.data];
      arr.push(action.payload);
      return {
        ...state,
        data: arr
      };
    }
    default: {
      return state;
    }
  }
};
