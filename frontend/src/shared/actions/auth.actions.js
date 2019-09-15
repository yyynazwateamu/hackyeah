import { authConstants } from '@constants';
import { authService } from '@services';
import { history } from '@util';

const loginWithAccount = (username, password) => dispatch => {
	dispatch({ type: authConstants.LOGIN_WITH_ACCOUNT_REQUEST });

	authService.loginWithAccount(username, password)
		.then(token => {
			dispatch({ type: authConstants.LOGIN_WITH_ACCOUNT_SUCCESS, payload: { token } });
			history.push('/ticket');
		})
		.catch(error => {
			dispatch({ type: authConstants.LOGIN_WITH_ACCOUNT_FAILURE, error: { ...error } });
		});
};

const loginWithoutAccount = username => dispatch => {
	dispatch({ type: authConstants.LOGIN_WITHOUT_ACCOUNT_REQUEST });

	authService.loginWithoutAccount(username)
		.then(token => {
			dispatch({ type: authConstants.LOGIN_WITHOUT_ACCOUNT_SUCCESS, payload: { token } });
		})
		.catch(error => {
			dispatch({ type: authConstants.LOGIN_WITHOUT_ACCOUNT_FAILURE, error: { ...error } });
		});
};

const logout = () => {
	authService.logout();
	return { type: authConstants.LOGOUT };
};

const signUp = user => dispatch => {
	dispatch({ type: authConstants.SIGNUP_REQUEST });

	authService.signUp(user)
		.then(data => {
			dispatch({ type: authConstants.SIGNUP_SUCCESS, payload: { data } });
		})
		.catch(error =>{
			dispatch({ type: authConstants.SIGNUP_FAILURE, error: { ...error } });
		});
};

export const authActions = {
	loginWithAccount,
	loginWithoutAccount,
	logout,
	signUp,
};
