import { DEL_CURRENTIMG_DATA } from '../../utils/actionTypes.js';
import { DelElemOnArray } from '../../utils/fetcher.js';

export default (state = {}, action) => {
  switch (action.type) {
    case DEL_CURRENTIMG_DATA: {
      console.log(state.array);
      console.log(action.payload);
      let arr = DelElemOnArray(state.array, action.payload);
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
