import { fetchWrapper } from '@util';

const getQuestions = () => {
	return fetchWrapper.GET('/game/quiz/question/', { params: { lat: 49.7040982, lng: 20.91 } })
		.then(response => {
			return { ...response.data };
		})
		.catch(error => {
			throw error;
		});
};

const answerQuestion = (questionID, answerID, token) => {
	return fetchWrapper.POST('/game/quiz/answer/', { id: questionID, answer: answerID, token: token })
		.then(response => {
			return response.data.right_answer;
		})
		.catch(error => {
			throw error;
		});
};

export const questionsService = {
	getQuestions,
	answerQuestion,
};