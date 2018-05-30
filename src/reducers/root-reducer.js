import { combineReducers } from 'redux';
import appCompReducer from './../reducer';

const appReducer = combineReducers({
	appCompReducer
});

export default (state = {}, action) => {
	return appReducer(state, action);
};
