//@flow
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Container, Typography,
  CssBaseline, TextField,
  FormHelperText
} from '@material-ui/core';
import {requestStatus} from '@constants';
import { useLoginStyles } from '@util';
import CustomButton from '@components/CustomButton/CustomButton';
import {LoadingModal} from '@components/LoadingModal';

const TicketPage = (props: Props) => {

  const classes = useLoginStyles();

  const [ticket, setTicket] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (props.requestStatus === requestStatus.SUCCESS) {
      props.history.push('/ticket');
    }
  }, [props.requestStatus]);


  return (
    <React.Fragment>
      <LoadingModal open={props.requestStatus === requestStatus.PENDING} />
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.formContainer}>
          <Typography component="h1" variant="h4" className={classes.header}>
            JOIN THE GAME
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Ticket number"
              name="nickname"
              autoComplete="nickname"
              autoFocus
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              error={props.requestStatus === requestStatus.FAILURE}
            />
            {props.requestStatus === requestStatus.FAILURE && <FormHelperText
              error
              id="my-helper-text"
            >
              {(props.error && props.error.detail) || 'Ticket error'}
            </FormHelperText>}
            <CustomButton
              text="Enter the lobby"
            />
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

type Props = {
  error?: {
    code: number,
    detail: string,
  },
  requestStatus: string,
  sendTicket: (password: string) => void,
  history: {
    push: () => void,
  },
};

const mapStateToProps = (state) => ({
});


const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketPage);
