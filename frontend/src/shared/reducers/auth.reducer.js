import { authConstants, requestStatus } from '@constants';

const initialState = {
	status: requestStatus.IDLE,
	token: '',
};

export function authReducer(state = initialState, action) {
	switch (action.type) {
	case authConstants.LOGIN_WITH_ACCOUNT_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case authConstants.LOGIN_WITH_ACCOUNT_SUCCESS:
		return { state, status: requestStatus.SUCCESS, token: action.payload.token, anonymous: false };
	case authConstants.LOGIN_WITH_ACCOUNT_FAILURE:
		return { state, status: requestStatus.ERROR, error: action.payload.error };

	case authConstants.LOGIN_WITHOUT_ACCOUNT_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case authConstants.LOGIN_WITHOUT_ACCOUNT_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, token: action.payload.token, anonymous: true };
	case authConstants.LOGIN_WITHOUT_ACCOUNT_FAILURE:
		return { ...state, status: requestStatus.FAILURE, error: action.payload.error };

	case authConstants.LOGOUT:
		return initialState;

	default:
		return state;
	}
}

