import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { questionsReducer } from './questions.reducer.js';
import { lobbyReducer } from './lobby.reducer';
import { ticketReducer } from './ticket.reducer';
import { userReducer } from './user.reducer';

export default combineReducers({
	auth: authReducer,
	lobby: lobbyReducer,
	ticket: ticketReducer,
	user: userReducer,
	questions: questionsReducer,
});


export { authSelectors } from './auth.reducer';
export { questionSelectors } from './questions.reducer';
export { lobbySelectors } from './lobby.reducer';
export { ticketSelectors } from './ticket.reducer';
export { userSelectors } from './user.reducer';
