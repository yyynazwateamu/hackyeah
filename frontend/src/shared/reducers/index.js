import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { lobbyReducer } from './lobby.reducer';
import { ticketReducer } from './ticket.reducer';
import { userReducer } from './user.reducer';
import { leaderboardReducer } from './leaderboard.reducer';
import { questionsReducer } from './questions.reducer.js';

export default combineReducers({
	auth: authReducer,
	lobby: lobbyReducer,
	ticket: ticketReducer,
	user: userReducer,
	questions: questionsReducer,
	leaderboard: leaderboardReducer,
});

export { authSelectors } from './auth.reducer';
export { lobbySelectors } from './lobby.reducer';
export { ticketSelectors } from './ticket.reducer';
export { userSelectors } from './user.reducer';
<<<<<<< HEAD
export { leaderboardSelectors } from './leaderboard.reducer';
=======
export { questionSelectors } from './questions.reducer';
>>>>>>> master
