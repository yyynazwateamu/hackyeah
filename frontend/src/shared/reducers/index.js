import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { lobbyReducer } from './lobby.reducer';
import { ticketReducer } from './ticket.reducer';

export default combineReducers({
	auth: authReducer,
	lobby: lobbyReducer,
	ticket: ticketReducer,
});


export { authSelectors } from './auth.reducer';
export { lobbySelectors } from './lobby.reducer';
export { ticketSelectors } from './ticket.reducer';