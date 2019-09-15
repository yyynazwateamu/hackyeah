import { lobbyConstants } from '@constants';
import { lobbyService } from '@services';

const getLobbyData = () => dispatch => {
	dispatch({ type: lobbyConstants.FETCH_DATA_REQUEST });

	lobbyService.getLobbyData()
		.then(data => {
			dispatch({ type: lobbyConstants.FETCH_DATA_SUCCESS, payload: { ...data } });
		})
		.catch(error => {
			dispatch({ type: lobbyConstants.FETCH_DATA_FAILURE, error: { ...error } });
		});
};

export const lobbyActions = {
	getLobbyData
};