import { fetchWrapper, JWTUtils } from '@util';

const loginWithAccount = (username, password) => {
	return fetchWrapper.POST('/accounts/jwt/create/', { username, password })
		.then(response => {
			console.log(response);
			const JWT = response.data.access;
			JWTUtils.setJWT(JWT);
			return JWT;
		})
		.catch(error => {
			throw error;
		});
};

const loginWithoutAccount = username => {
	return fetchWrapper.POST('/accounts/anonymous/login/', { username })
		.then(response => {
			console.log(response);
			const JWT = response.data.access;
			JWTUtils.setJWT(JWT);
			return JWT;
		})
		.catch(error => {
			throw error;
		});
};

export const authService = {
	loginWithAccount,
	loginWithoutAccount
};