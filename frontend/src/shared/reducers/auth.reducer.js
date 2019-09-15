import {authConstants, requestStatus} from '@constants';
import {JWTUtils} from '@util';

const initialState = {
  status: requestStatus.IDLE,
  token: JWTUtils.getJWT(),
  anonymous: undefined,
  error: undefined,
  signupStatus: requestStatus.IDLE
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_WITH_ACCOUNT_REQUEST:
      return {...state, status: requestStatus.PENDING};
    case authConstants.LOGIN_WITH_ACCOUNT_SUCCESS:
      return {...state, status: requestStatus.SUCCESS, token: action.payload.token, anonymous: false};
    case authConstants.LOGIN_WITH_ACCOUNT_FAILURE:
      return {...state, status: requestStatus.FAILURE, error: action.error};

    case authConstants.LOGIN_WITHOUT_ACCOUNT_REQUEST:
      return {...state, status: requestStatus.PENDING};
    case authConstants.LOGIN_WITHOUT_ACCOUNT_SUCCESS:
      return {...state, status: requestStatus.SUCCESS, token: action.payload.token, anonymous: true};
    case authConstants.LOGIN_WITHOUT_ACCOUNT_FAILURE:
      return {...state, status: requestStatus.FAILURE, error: action.error};

    case authConstants.LOGOUT:
      return initialState;

    case authConstants.SIGNUP_REQUEST:
      return {...state, signupStatus: requestStatus.PENDING};
    case authConstants.SIGNUP_SUCCESS:
      return {...state, signupStatus: requestStatus.SUCCESS, userData: action.payload.data};
    case authConstants.SIGNUP_FAILURE:
      return {...state, signupStatus: requestStatus.FAILURE, error: action.error};


    default:
      return state;
  }
}

export const authSelectors = {
  isAuthenticated: state => !!state.auth.token,
  getError: state => state.auth.error,
  getAnonymous: state => state.auth.anonymous,
  getToken: state => state.auth.token,
  getStatus: state => state.auth.status,
  getSignupStatus: state => state.auth.signupStatus,
  getUserData: state => state.auth.userData,

};
