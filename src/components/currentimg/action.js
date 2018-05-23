import { DEL_CURRENTIMG_DATA } from '../../utils/actionTypes.js';

export function delCurrentimgData(index) {
  return {
    type: DEL_CURRENTIMG_DATA,
    payload: index
  };
}
