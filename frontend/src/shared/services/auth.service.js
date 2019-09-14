import { fetchWrapper, JWTUtils } from '@util';

const loginWithAccount = (username, password) => {
	return fetchWrapper.POST('/accounts/jwt/create/', { username, password })
		.then(response => {
			const JWT = response.data.access;
			JWTUtils.setJWT(JWT);
			return JWT;
		})
		.catch(error => {
			const { response: { data: { detail }, status: code } } = error;
			throw { code, detail };
		});
};

const loginWithoutAccount = username => {
	return fetchWrapper.POST('/accounts/anonymous/login/', { username })
		.then(response => {
			const JWT = response.data.access;
			JWTUtils.setJWT(JWT);
			return JWT;
		})
		.catch(error => {
			const { response: { data: { username: [ detail ] }, status: code } } = error;
			throw { code, detail };
		});
};

const logout = () => {
	JWTUtils.deleteJWT();
};

export const authService = {
	loginWithAccount,
	loginWithoutAccount,
	logout,
};