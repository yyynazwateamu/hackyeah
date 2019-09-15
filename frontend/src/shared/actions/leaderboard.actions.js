import { leaderboardConstants } from '@constants';
import { leaderboardService } from '@services';

const getLeaderboardData = () => dispatch => {
	dispatch({ type: leaderboardConstants.FETCH_DATA_REQUEST });

	leaderboardService.getLeaderboardData()
		.then(data => {
			dispatch({ type: leaderboardConstants.FETCH_DATA_SUCCESS, payload: { ...data } });
		})
		.catch(error => {
			dispatch({ type: leaderboard.FETCH_DATA_FAILURE, error: { ...error } });
		});
};

export const leaderboardActions = {
	getLeaderboardData,
};