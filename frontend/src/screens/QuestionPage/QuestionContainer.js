import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';
import colors from '@constants/colors';
import QuestionList from './QuestionList';
import { questionsActions } from '@actions';
import { questionSelectors } from '@reducers';
import { history } from '@util';

// const questions = [
//     {
//         question: 'Which is the capital of Poland?',
//         answers: ['Krakow', 'Warsaw', 'Katowice', 'Wroclaw'],
//         rightAnswer: 2,
//     },
//     {
//         question: 'In which city is located Wawel?',
//         answers: ['Katowice', 'Warsaw', 'Wroclaw', 'Krakow'],
//         rightAnswer: 4,
//     },
//     {
//         question: 'What is the oldest university in Poland?',
//         answers: ['University of Warsaw', 'University of Wrocław', 'Jagiellonian University', 'Adam Mickiewicz University in Poznań'],
//         rightAnswer: 3,
//     },
//     {
//         question: 'From which building is played bugle-call?',
//         answers: ['Kościół Mariacki w Krakowie', 'Ratusz w Krakowie', 'Wieża Wawelska w Krakowie', 'Ratusz w Poznaniu'],
//         rightAnswer: 1,
//     },
//     {
//         question: 'What is the symbol of Warsaw?',
//         answers: ['Siren', 'Dragon', 'Programmer', 'Train'],
//         rightAnswer: 1,
//     },
// ]

const options = [
    'Zgłoś',
  ];

const useStyles = makeStyles(theme => ({
    question: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontWeight: 'normal',
        color: colors.black,
    },
    wrong: {
        color: 'red',
    },
    img: {
        width: '100%',
    }
}));

function QuestionContainer(props: Props) {
    const [time, setTime] = useState(15);
    const classes = useStyles();

    useEffect(() => {
      props.getQuestions();
    }, []);

    useEffect(() => {
        if(time===0) {
            props.changeQuestion();
            props.resetQuestions();
            document.activeElement.blur();
            if (props.questionNumber === 5) {
              return history.push('/leaderboard');
            }
            return setTime(15);
        }
        setTimeout(() => setTime(time-1), 1000);
    }, [time]);

  return (
    <div >
      <CustomAppBar title={`Question ${props.questionNumber+1}/5`} options={options} path={'/'} history={props.history} />
      {
        props.questions &&
        <React.Fragment>
          <img className={classes.img} src='https://via.placeholder.com/400x200' />
          <h2 className={classes.question}>{props.questions[props.questionNumber].question} </h2>
          <h4 className={`${classes.question} ${time<6 ? classes.wrong : ''}`}>{`${Math.floor(time/60)}:${time-(Math.floor(time/60)*60)}`}</h4>
          <QuestionList
            questions={props.questions[props.questionNumber]}
            questionNumber={props.questionNumber}
            sendAnswer={props.checkAnswer}
            clicked={props.index}
            disabled={props.disabled}
            token={props.token}
            rightAnswer={props.rightAnswer}
            selectedAnswer={props.index}
          />
        </React.Fragment>
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
    questionNumber: questionSelectors.getQuestionNumber(state),
    disabled: questionSelectors.getDisabled(state),
    index: questionSelectors.getIndex(state),
    questions: questionSelectors.getQuestions(state),
    token: questionSelectors.getToken(state),
    rightAnswer: questionSelectors.getRightAnswer(state),
});

const mapDispatchToProps = (dispatch) => ({
    changeQuestion: () => dispatch(questionsActions.changeQuestionNumber()),
    checkAnswer: (questionID, answerID, token) => dispatch(questionsActions.checkAnswer(questionID, answerID, token)),
    resetQuestions: () => dispatch(questionsActions.resetQuestions()),
    getQuestions: () => dispatch(questionsActions.getQuestions()),
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);

type Props = {
    history: object,
}
