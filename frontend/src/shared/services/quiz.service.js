import { fetchWrapper } from '@util';

const getQuestion = () => {
	return fetchWrapper.GET('/game/quiz/question/', { params: { lat: 50.7040982, lng: 20.91 } })
		.then(response => {
			console.log(response);
			return response;
		})
		.catch(error => {
			throw error;
		});
};

export const quizService = {
	getQuestion,
};