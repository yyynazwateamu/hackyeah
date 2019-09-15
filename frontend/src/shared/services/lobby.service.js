import { fetchWrapper } from '@util';

const getLobbyData = () => {
	return fetchWrapper.GET('/game/lobby/')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			throw error;
		});
};

const setReadyStatus = (isReady) => {
	return Promise.resolve({ success: true });
};

export const lobbyService = {
	getLobbyData,
	setReadyStatus
};