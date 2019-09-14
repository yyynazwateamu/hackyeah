import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';
import colors from '@constants/colors';
import QuestionList from './QuestionList';

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
    }
}));

export default function QuestionContainer(props: Props) {
    const classes = useStyles();
  return (
    <div >
        <CustomAppBar title="Pytanie 1/10" options={options} path={'/'} history={props.history} />
        <img src='https://via.placeholder.com/400x200' />
        <h2 className={classes.question}>What is Javascript? </h2>
        <h4 className={`${classes.question} ${classes.wrong}`}>Wrong answer </h4>
        <QuestionList />
    </div>
  );
}

type Props = {
    history: object,
}
