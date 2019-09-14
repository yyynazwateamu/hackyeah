import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { lobbyReducer } from './lobby.reducer';

export default combineReducers({
	auth: authReducer,
	lobby: lobbyReducer,
});


export { authSelectors } from './auth.reducer';
export { lobbySelector } from './lobby.reducer';