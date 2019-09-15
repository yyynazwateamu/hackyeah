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

const setReadyStatus = () => dispatch => {
	dispatch({ type: lobbyConstants.SET_READY_STATUS_REQUEST });

	lobbyService.setReadyStatus()
		.then(data => {
			dispatch({ type: lobbyConstants.SET_READY_STATUS_SUCCESS });
			dispatch(getLobbyData());
		})
		.catch(error => {
			dispatch({ type: lobbyConstants.SET_READY_STATUS_FAILURE });
		});
};

export const lobbyActions = {
	getLobbyData,
	setReadyStatus,
};