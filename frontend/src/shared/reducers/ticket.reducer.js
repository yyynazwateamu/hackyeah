import { ticketConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.PENDING,
};

export function ticketReducer(state = initialState, action) {
	switch (action.type) {
	case ticketConstants.FETCH_DATA_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case ticketConstants.FETCH_DATA_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS };
	case ticketConstants.FETCH_DATA_FAILURE:
		return { ...state, status: requestStatus.FAILURE };
	default:
		return initialState;
	}
}

export const ticketSelectors = {

};