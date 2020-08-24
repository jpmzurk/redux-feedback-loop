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
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: '98%',
    },
    margins: {
        marginLeft: '.75em',
        marginRight: '1em'
    }
});

export default function AdminTable(props) {
    const classes = useStyles();

    const updateCheckIn = (id) => {
        axios.put(`/feedback/${id}`)
            .then((response) => {
                console.log(response);
                
                props.getValues();
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const handleToggle = (id) => (event) => {
        console.log(event.target);
        console.log(event.target.checked)
        console.log(id);        
        updateCheckIn(id);
    }

    return (
        <Paper className={classes.margins}>
        <TableContainer variant="outlined" className={classes.margins}>
            <Table className={classes.table} aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Student</TableCell>
                        <TableCell align="right">Feeling</TableCell>
                        <TableCell align="right">Understanding</TableCell>
                        <TableCell align="right">Support</TableCell>
                        <TableCell align="right">Check In?</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.feedback.map((feedback) => (
                        <TableRow key={feedback.id}>
                            <TableCell component="th" scope="row">
                                {feedback.student}
                            </TableCell>
                            <TableCell align="right">{feedback.feeling}</TableCell>
                            <TableCell align="right">{feedback.understanding}</TableCell>
                            <TableCell align="right">{feedback.support}</TableCell>
                            <TableCell align="right">
                                <FormControlLabel control={
                                    <Switch checked={feedback.flagged}
                                            onChange={handleToggle(feedback.id)}
                                    />}
                                />
                                {feedback.flagged === true ? "Needs One" : "Doesn't"}
                            </TableCell>
                            <TableCell align="right">{feedback.comments}</TableCell>
                            <TableCell align="right"><Moment format="MM/DD/YYYY">
                                {feedback.date}
                            </Moment>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
    );
}