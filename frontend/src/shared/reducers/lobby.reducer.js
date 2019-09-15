import { lobbyConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.PENDING,
};

export function lobbyReducer(state = initialState, action) {
	switch (action.type) {
	case lobbyConstants.FETCH_DATA_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case lobbyConstants.FETCH_DATA_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS };
	case lobbyConstants.FETCH_DATA_FAILURE:
		return { ...state, status: requestStatus.FAILURE };
	default:
		return initialState;
	}
}

export const lobbySelectors = {

};