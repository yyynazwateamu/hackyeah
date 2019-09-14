import React from 'react';
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
    border: '0.5px solid black',
    color: colors.black,
    '&:focus': {
        backgroundColor: colors.orange,
    }
  },
  bottom : {
    position: 'absolute',
    bottom: '15px',
  }
}));

const QuestionButton = (props: Props) => {
    const classes = useStyles();
    const submit = props.bottom ? `${classes.submit} ${classes.bottom}` : classes.submit;
    return (
        <Button
            type="submit"
            variant="contained"
            color={colors.orange}
            size="large"
            className={submit}
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
