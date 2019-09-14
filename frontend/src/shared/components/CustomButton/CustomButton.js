//@flow
import React from 'react';
import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  submit: {
    margin: '0 15px',
    width: 'calc(100% - 30px)',
    borderRadius: '0px',
    textTransform: 'none',
  },
  bottom : {
    position: 'absolute',
    bottom: '15px',
  }
}));

const CustomButton = (props: Props) => {
    const classes = useStyles();
    const submit = props.bottom ? `${classes.submit} ${classes.bottom}` : classes.submit;
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={`${submit} ${props.className}`}
        >
            {props.text}
        </Button>
    );
};

export default CustomButton;

CustomButton.defaultProps = {
  classname: '',
};

type Props = {
    text: string,
    bottom?: boolean,
    className?: string,
}
