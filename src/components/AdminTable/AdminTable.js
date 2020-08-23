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
    },
});


export default function AdminTable(props) {
    const classes = useStyles();

    const updateCheckIn = (id) => {
        axios.put(`/feedback/${id}`)
            .then((response) => {
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

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
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
                    {props.feedback.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.student}
                            </TableCell>
                            <TableCell align="right">{row.feeling}</TableCell>
                            <TableCell align="right">{row.understanding}</TableCell>
                            <TableCell align="right">{row.support}</TableCell>
                            <TableCell align="right">
                                <FormControlLabel control={
                                    <Switch checked={row.flagged}
                                        onChange={handleToggle(row.id)}
                                    />}

                                />
                                {row.flagged === true ? "Needs One" : "Doesn't"}
                            </TableCell>
                            <TableCell align="right">{row.comments}</TableCell>
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