import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function AdminTable(props) {
  const [flagged, setFlagged] = useState (false);
  const classes = useStyles();
    console.log(props.feedback);
  const handleToggle = (event) => {

    setFlagged(...flagged, event.target.checked )
  }
  return (
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell align="right">Feeling (1-5)</TableCell>
            <TableCell align="right">Understanding (1-5)</TableCell>
            <TableCell align="right">Support (1-5)</TableCell>
             <TableCell align="right">Flag</TableCell>
            <TableCell align="right">Date</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {props.feedback.map((row) => (
            <TableRow key={row.student}>
              <TableCell component="th" scope="row">
                {row.student}
              </TableCell>
              <TableCell align="right">{row.feeling}</TableCell>
              <TableCell align="right">{row.understanding}</TableCell>
              <TableCell align="right">{row.support}</TableCell>
              <TableCell align="right">
              <FormControlLabel id={row.id}
            control={<Switch checked={flagged} onChange={handleToggle} />}
            label={String(row.flagged)}
            />
                  {row.flagged}
              </TableCell>
              <TableCell align="right"><Moment format="MM/DD/YYYY">
                {row.date}
            </Moment>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}