import { fetchWrapper } from '@util';

const submitTicketData = (ticketNumber) => {
	return fetchWrapper.POST('/accounts/users/me/ticket/', { 'ticket_number': ticketNumber })
		.then(response => {
			return response;
		})
		.catch(error => {
			throw error;
		});
};

export const ticketService = {
	submitTicketData
};