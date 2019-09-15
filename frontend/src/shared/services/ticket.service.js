import { fetchWrapper } from '@util';

const submitTicketData = (ticketNumber) => {
	return fetchWrapper.POST('/accounts/users/me/ticket/', { 'ticket_number': ticketNumber })
		.then(response => {
			console.log(response);
			return response;
		})
		.catch(error => {
			console.log(error);
			throw error;
		});
};

export const ticketService = {
	submitTicketData
};