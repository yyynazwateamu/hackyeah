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
            <QuestionButton text='Milówka' />
        </div>
        <div className={classes.questionButton}>
            <QuestionButton text='Zabrze' />
        </div>
        <div className={classes.questionButton}>
            <QuestionButton text='Okocim' />
        </div>
        <div className={classes.questionButton}>
            <QuestionButton text='Leżajsk' />
        </div>
    </div>
  );
}

type Props = {
    history: object,
}
