import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QuestionButton from './QuestionButton';

const useStyles = makeStyles(theme => ({
    questionButton: {
      margin: '15px 0',
    },
  }));

export default function QuestionContainer(props: Props) {
  const classes = useStyles();
  return (
    <div >
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[0]} 
                index={0}
                token={props.token}
                questionID={props.questions.id}
                questionNumber={props.questionNumber}
                rightAnswer={props.rightAnswer === 0}
                sendAnswer={props.sendAnswer}
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked}
                selectedAnswer={props.selectedAnswer}/>
        </div>
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[1]} 
                index={1}
                token={props.token}
                questionID={props.questions.id}
                questionNumber={props.questionNumber}
                rightAnswer={props.rightAnswer === 1}
                sendAnswer={props.sendAnswer} 
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked}
                selectedAnswer={props.selectedAnswer}/>
        </div>
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[2]}
                index={2}
                token={props.token}
                questionID={props.questions.id}
                questionNumber={props.questionNumber}
                rightAnswer={props.rightAnswer === 2}
                sendAnswer={props.sendAnswer} 
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked}
                selectedAnswer={props.selectedAnswer}/>
        </div>
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[3]} 
                index={3}
                token={props.token}
                questionID={props.questions.id}
                rightAnswer={props.rightAnswer === 3}
                sendAnswer={props.sendAnswer}
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked}
                selectedAnswer={props.selectedAnswer}/>
        </div>
    </div>
  );
}

type Props = {
    history: object,
}
