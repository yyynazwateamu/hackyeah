import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { lobbyReducer } from './lobby.reducer';
import { ticketReducer } from './ticket.reducer';
import { userReducer } from './user.reducer';
import { quizReducer } from './quiz.reducer';

export default combineReducers({
	auth: authReducer,
	lobby: lobbyReducer,
	ticket: ticketReducer,
	user: userReducer,
	quiz: quizReducer,
});


export { authSelectors } from './auth.reducer';
export { lobbySelectors } from './lobby.reducer';
export { ticketSelectors } from './ticket.reducer';
export { userSelectors } from './user.reducer';
export { quizSelectors } from './quiz.reducer';