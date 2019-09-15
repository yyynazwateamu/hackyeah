import { fetchWrapper } from '@util';

const getQuestions = () => {
	return fetchWrapper.GET('/game/quiz/question/', { params: { lat: 50.7040982, lng: 20.91 } })
		.then(response => {
			console.log(response);
			return { ...response.data };
		})
		.catch(error => {
			throw error;
		});
};

const answerQuestion = (questionID, answerID, token) => {
	return fetchWrapper.POST('/game/quiz/answer/', { id: questionID, answer: answerID, token: token })
		.then(response => {
			console.log(response);
			return response;
		})
		.then(error => {
			throw error;
		});
};

export const questionsService = {
	getQuestions,
	answerQuestion,
};