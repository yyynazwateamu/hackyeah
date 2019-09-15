import { leaderboardConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.IDLE,
};

export function leaderboardReducer(state = initialState, action) {
	switch (action.type) {
	case leaderboardConstants.FETCH_DATA_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case leaderboardConstants.FETCH_DATA_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, title: action.payload.title, users: action.payload.users };
	case leaderboardConstants.FETCH_DATA_FAILURE:
		return { ...state, status: requestStatus.FAILURE };
	default:
		return state;
	}
}

export const leaderboardSelectors = {
	getUsers: state => state.leaderboard.users,
	getTitle: state => state.leaderboard.title,
};