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
                rightAnswer={props.questions.rightAnswer} 
                sendAnswer={props.sendAnswer}
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked} />
        </div>
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[1]} 
                index={1} 
                rightAnswer={props.questions.rightAnswer} 
                sendAnswer={props.sendAnswer} 
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked}/>
        </div>
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[2]} 
                index={2} 
                rightAnswer={props.questions.rightAnswer} 
                sendAnswer={props.sendAnswer} 
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked}/>
        </div>
        <div className={classes.questionButton}>
            <QuestionButton 
                text={props.questions.answers[3]} 
                index={3} 
                rightAnswer={props.questions.rightAnswer} 
                sendAnswer={props.sendAnswer}
                disabled={props.disabled}
                answerStatus={props.answerStatus}
                clicked={props.clicked} />
        </div>
    </div>
  );
}

type Props = {
    history: object,
}
