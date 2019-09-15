import { ticketConstants } from '@constants';
import { ticketService } from '@services';

const submitTicketData = ticketNumber => dispatch => {
	dispatch({ type: ticketConstants.FETCH_DATA_REQUEST });

	ticketService.submitTicketData(ticketNumber)
		.then(data => {
			dispatch({ type: ticketConstants.FETCH_DATA_SUCCESS, payload: { ...data } });
		})
		.catch(error => {
			dispatch({ type: ticketConstants.FETCH_DATA_FAILURE, error: { ...error } });
		});
};

export const ticketActions = {
	submitTicketData
};