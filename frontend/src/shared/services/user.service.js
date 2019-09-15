import { fetchWrapper } from '@util';

const getUserDetails = () => {
	return fetchWrapper.GET('/account/users/me/')
		.then(response => {
			console.log(response);
			return response.data;
		})
		.then(error => {
			console.log(error);
			throw error;
		});
};

export const userService = {
	getUserDetails,
};