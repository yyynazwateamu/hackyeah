//@flow
import React from 'react';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
	spinner: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	}
}));

const LoadingModal = ({ open }: { open: boolean }) => {
	const classes = useStyles();

	return (
		<Modal open={open}>
			<div className={classes.spinner}>
				<CircularProgress color="secondary"/>
			</div>
		</Modal>
	);
};

export default LoadingModal;