import { lobbyConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.IDLE,
};

export function lobbyReducer(state = initialState, action) {
	switch (action.type) {
	case lobbyConstants.FETCH_DATA_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case lobbyConstants.FETCH_DATA_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, title: action.payload.title, users: action.payload.users };
	case lobbyConstants.FETCH_DATA_FAILURE:
		return { ...state, status: requestStatus.FAILURE };
	default:
		return state;
	}
}

export const lobbySelectors = {
	getUsers: state => state.lobby.users,
	getTitle: state => state.lobby.title,
};