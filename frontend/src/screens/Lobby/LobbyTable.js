import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import DotLoader from '@assets/icons/dot-loader.svg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    marginTop: '15px',
    width: 'calc(100vw - 30px)',
    marginLeft: '15px',
    marginRight: '15px',
  },
  tableHeader: {
    fontSize: '18px',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1. Jarek', <CheckIcon />),
  createData('2. Marek', <CheckIcon />),
  createData('3. Skkrtka', <img src={DotLoader} />),
  createData('4. Bang bang', <CheckIcon />),
];

export default function LobbyTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableHeader} >Gracze:</TableCell>
            <TableCell className={classes.tableHeader} align="right">Status:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
