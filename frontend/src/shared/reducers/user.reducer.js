import { userConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.IDLE,
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
	case userConstants.FETCH_DETAILS_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case userConstants.FETCH_DETAILS_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, data: {...action.payload} };
	case userConstants.FETCH_DETAILS_FAILURE:
		return { ...state, status: requestStatus.FAILURE, error: {...action.error} };
	default:
		return state;
	}
}

export const userSelectors = {

};