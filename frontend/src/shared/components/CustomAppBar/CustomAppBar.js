//@flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBack from '@material-ui/icons/ArrowBack';

const options = [
  'Zgłoś',
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  backArrow: {
      color: 'white',
  },
}));

const CustomAppBar = (props: Props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleBackClick = () => {
    props.history.push(props.path);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {!props.hideArrow && <IconButton className={classes.backArrow}
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleBackClick}
            >
            <ArrowBack />
        </IconButton>
        }
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {props.title}
          </Typography>
          {!props.hideMenu && 
          <React.Fragment>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                },
                }}
            >
                {props.options.map(option => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
          </React.Fragment>
        }
        </Toolbar>
      </AppBar>
    </div>
  );
}

type Props = {
    history: object,
    path: string,
    options: array,
    title: string,
    hideMenu?: bool,
    hideArrow?: bool,
}

export default CustomAppBar;
