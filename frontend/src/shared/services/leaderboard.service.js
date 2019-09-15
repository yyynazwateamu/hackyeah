import { fetchWrapper } from '@util';

const getLeaderboardData = () => {
	return fetchWrapper.GET('/game/leaderboard/')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			throw error;
		});
};

export const leaderboardService = {
	getLeaderboardData,
};