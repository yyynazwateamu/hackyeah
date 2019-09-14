const tokenKey = 'user JWT';

export const JWTUtils = {
	getJWT: () => localStorage.getItem(tokenKey) || undefined,
	setJWT: token => localStorage.setItem(tokenKey, token),
	deleteJWT: () => localStorage.removeItem(tokenKey)
};

