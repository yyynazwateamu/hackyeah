import { userConstants } from '@constants';
import { userService } from '@services';

const getUserDetails = () => dispatch => {
	dispatch({ type: userConstants.FETCH_DETAILS_REQUEST });

	userService.getUserDetails()
		.then(data => {
			dispatch({ type: userConstants.FETCH_DETAILS_SUCCESS, payload: { ...data } });
		})
		.catch(error => {
			dispatch({ type: userConstants.FETCH_DETAILS_FAILURE, error });
		});
};

export const userActions = {
	getUserDetails
};