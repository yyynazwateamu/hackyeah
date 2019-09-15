import { ticketConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.IDLE,
};

export function ticketReducer(state = initialState, action) {
	switch (action.type) {
	case ticketConstants.SUBMIT_DATA_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case ticketConstants.SUBMIT_DATA_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS };
	case ticketConstants.SUBMIT_DATA_FAILURE:
		return { ...state, status: requestStatus.FAILURE };
	default:
		return state;
	}
}

export const ticketSelectors = {

};