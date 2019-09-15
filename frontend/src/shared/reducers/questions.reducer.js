import {questionsConstants, requestStatus} from '@constants';

// const initialState = {
// 	questions: [
// 		{
// 			question: 'Which is the capital of Poland?',
// 			answers: ['Krakow', 'Warsaw', 'Katowice', 'Wroclaw'],
// 			rightAnswer: 1,
// 		},
// 		{
// 			question: 'In which city is located Wawel?',
// 			answers: ['Katowice', 'Warsaw', 'Wroclaw', 'Krakow'],
// 			rightAnswer: 3,
// 		},
// 		{
// 			question: 'What is the oldest university in Poland?',
// 			answers: ['University of Warsaw', 'University of Wrocław', 'Jagiellonian University', 'Adam Mickiewicz University in Poznań'],
// 			rightAnswer: 2,
// 		},
// 		{
// 			question: 'From which building is played bugle-call?',
// 			answers: ['Kościół Mariacki w Krakowie', 'Ratusz w Krakowie', 'Wieża Wawelska w Krakowie', 'Ratusz w Poznaniu'],
// 			rightAnswer: 0,
// 		},
// 		{
// 			question: 'What is the symbol of Warsaw?',
// 			answers: ['Siren', 'Dragon', 'Programmer', 'Train'],
// 			rightAnswer: 0,
// 		},
// 	],
// 	questionNumber: 0,
// 	index: undefined,
// };

const initialState = {
	questions: undefined,
	questionNumber: 0,
	index: undefined,
};

export function questionsReducer(state = initialState, action) {
	switch (action.type) {
	case questionsConstants.FETCH_QUESTIONS_REQUEST:
		return { ...state, status: requestStatus.PENDING };
	case questionsConstants.FETCH_QUESTIONS_SUCCESS:
		return { ...state, status: requestStatus.SUCCESS, questions: action.payload.questions, token: action.payload.token };
	case questionsConstants.FETCH_QUESTIONS_FAILURE:
		return { ...state, status: requestStatus.FAILURE, error: action.error };

	case questionsConstants.CHANGE_QUESTION_NUMBER:
		return { ...state, questionNumber: state.questionNumber + 1 };
	case questionsConstants.CHECK_ANSWER:
		return { ...state, disabled: true, index: action.payload.index, rightAnswer: action.payload.rightAnswer };
	case questionsConstants.RESET_QUESTIONS:
		return { ...state, disabled: false, index: undefined, rightAnswer: undefined };
	default:
		return state;
	}
}

export const questionSelectors = {
	getQuestions: state => state.questions.questions,
	getQuestionNumber: state => state.questions.questionNumber,
	getDisabled: state => state.questions.disabled,
	getToken: state => state.questions.token,
	getIndex: state => state.questions.index,
	getRightAnswer: state => state.questions.rightAnswer,
};
