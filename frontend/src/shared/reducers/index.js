import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { questionsReducer } from './questions.reducer.js';

export default combineReducers({
	auth: authReducer,
	questions: questionsReducer,
});



export { authSelectors } from './auth.reducer';
export { questionSelectors } from './questions.reducer';