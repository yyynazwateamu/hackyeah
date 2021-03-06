import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import colors from '@constants/colors';

const useStyles = makeStyles((theme,active) => ({
  submit: {
    margin: '0 10%',
    width: '80%',
    borderRadius: '0px',
    textTransform: 'none',
    backgroundColor: 'white',
    border: '0.5px solid',
    borderColor: colors.black,
    color: colors.black,
    '&:focus': {
        backgroundColor: colors.orange,
    },
    '&:hover': {
        backgroundColor: 'white',
    },
  },
  bottom : {
    position: 'absolute',
    bottom: '15px',
  },
  wrong: {
      '&:focus': {
      backgroundColor: 'red',
      }
  },
  right: {
    '&:focus': {
        backgroundColor: 'green',
        }
  },
}));

const QuestionButton = (props: Props) => {
    const classes = useStyles();
    const submit = props.bottom ? `${classes.submit} ${classes.bottom}` : classes.submit;
    const sendAnswer = () => {
      props.sendAnswer(props.questionID, props.index, props.token);
    };

    return (
        <Button
            type="submit"
            variant="contained"
            color={colors.orange}
            size="large"
            className={`${submit}`}
            style={props.index !== props.selectedAnswer ? {} : {backgroundColor: props.rightAnswer ? 'green' : 'red'}}
            onClick={() => {
              if(!props.disabled) {
                sendAnswer();
              }
            }}
        >
            {props.text}
        </Button>
    )
};

export default QuestionButton;

type Props = {
    text: string,
    bottom: boolean,
}
