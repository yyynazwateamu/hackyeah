import { questionsConstants } from '@constants';

const changeQuestionNumber = () => (dispatch) => {
    dispatch({ 
        type: questionsConstants.CHANGE_QUESTION_NUMBER, 
    })
}

const checkAnswer = (index) => (dispatch) => {
    console.log('Hau hau');
    dispatch({
        type: questionsConstants.CHECK_ANSWER,
        index,
    })
}

const resetQuestions = () => (dispatch) => {
    console.log('miau');
    dispatch({
        type: questionsConstants.RESET_QUESTIONS,
    })
}

export const questionsActions = {
    changeQuestionNumber,
    checkAnswer,
    resetQuestions,
}