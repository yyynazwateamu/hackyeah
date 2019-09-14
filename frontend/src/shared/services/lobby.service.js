import { fetchWrapper } from '@util';

const getLobbyData = () => {
	return fetchWrapper.GET('/game/lobby/')
		.then(response => {
			console.log(response);
			return response;
		})
		.catch(error => {
			console.log(error);
			throw error;
		});
};

export const lobbyService = {
	getLobbyData
};