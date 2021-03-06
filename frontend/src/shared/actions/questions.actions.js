import { questionsConstants } from '@constants';
import { questionsService } from '@services';

const getQuestions = () => (dispatch) => {
	dispatch({ type: questionsConstants.FETCH_QUESTIONS_REQUEST });

	questionsService.getQuestions()
		.then(({ questions, token }) => {
			dispatch({ type: questionsConstants.FETCH_QUESTIONS_SUCCESS, payload: { questions, token } });
		})
		.catch(error => {
			dispatch({ type: questionsConstants.FETCH_QUESTIONS_FAILURE, error });
		});
};

const changeQuestionNumber = () => (dispatch) => {
	dispatch({
		type: questionsConstants.CHANGE_QUESTION_NUMBER,
	});
};

const checkAnswer = (questionID, answerID, token) => (dispatch) => {
	console.log(questionID, answerID, token);
	questionsService.answerQuestion(questionID, answerID, token)
		.then(rightAnswer => {
			dispatch({
				type: questionsConstants.CHECK_ANSWER,
				payload: {
					index: answerID,
					rightAnswer,
				}
			});
		});
};

const resetQuestions = () => (dispatch) => {
	dispatch({
		type: questionsConstants.RESET_QUESTIONS,
	});
};

export const questionsActions = {
	getQuestions,
	changeQuestionNumber,
	checkAnswer,
	resetQuestions,
};