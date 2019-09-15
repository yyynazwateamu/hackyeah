import { quizConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.IDLE,
};

export function quizReducer(state = initialState, action) {
	switch (action.type) {
	case quizConstants.SUBMIT_DATA_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case quizConstants.SUBMIT_DATA_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS };
	case quizConstants.SUBMIT_DATA_FAILURE:
		return { ...state, status: requestStatus.FAILURE, error: action.error };
	default:
		return state;
	}
}

export const quizSelectors = {

};