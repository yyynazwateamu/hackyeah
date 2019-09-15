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
	return fetchWrapper.POST('/accounts/users/me/status/', { ready: isReady })
		.then(response => {
			return response.data;
		})
		.catch(error => {
			throw error;
		});
};

export const lobbyService = {
	getLobbyData,
	setReadyStatus
};