import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { lobbyReducer } from './lobby.reducer';
import { ticketReducer } from './ticket.reducer';
import { userReducer } from './user.reducer';
import { questionsReducer } from './questions.reducer.js';

export default combineReducers({
	auth: authReducer,
	lobby: lobbyReducer,
	ticket: ticketReducer,
	user: userReducer,
	quiz: quizReducer,
	questions: questionsReducer,
});


export { authSelectors } from './auth.reducer';
export { lobbySelectors } from './lobby.reducer';
export { ticketSelectors } from './ticket.reducer';
export { userSelectors } from './user.reducer';
export { questionSelectors } from './questions.reducer';
export { quizSelectors } from './quiz.reducer';