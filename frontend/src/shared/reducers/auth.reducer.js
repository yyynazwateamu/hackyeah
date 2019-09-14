import { authConstants, requestStatus } from '@constants';
import { JWTUtils } from '@util';

const initialState = {
	status: requestStatus.IDLE,
	token: JWTUtils.getJWT(),
	anonymous: undefined,
	error: undefined,
};

export function authReducer(state = initialState, action) {
	switch (action.type) {
	case authConstants.LOGIN_WITH_ACCOUNT_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case authConstants.LOGIN_WITH_ACCOUNT_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, token: action.payload.token, anonymous: false };
	case authConstants.LOGIN_WITH_ACCOUNT_FAILURE:
		return { ...state, status: requestStatus.ERROR, error: action.error };

	case authConstants.LOGIN_WITHOUT_ACCOUNT_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case authConstants.LOGIN_WITHOUT_ACCOUNT_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, token: action.payload.token, anonymous: true };
	case authConstants.LOGIN_WITHOUT_ACCOUNT_FAILURE:
		return { ...state, status: requestStatus.FAILURE, error: action.error };

	case authConstants.LOGOUT:
		return initialState;

	default:
		return state;
	}
}

export const authSelectors = {
	isAuthenticated : state => !!state.auth.token
};
