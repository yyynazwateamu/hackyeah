import { fetchWrapper } from '@util';

const getUserDetails = () => {
	return fetchWrapper.GET('/accounts/users/me/')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			throw error;
		});
};

export const userService = {
	getUserDetails,
};