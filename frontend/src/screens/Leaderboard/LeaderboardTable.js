import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
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

export default function LeaderboardTable({ rows }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableHeader} >Players:</TableCell>
            <TableCell className={classes.tableHeader} align="right">Status:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows &&
            rows.map(row => (
              <TableRow key={row.name} className={classes.tableRow}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.readyIcon}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}
