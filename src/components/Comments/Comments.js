import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RedButton, GreenButton } from '../Buttons/Buttons';
import { useState } from 'react'
import '../Comments/Comments.css'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '50ch',
        },
    },
}));

export default function Comments(props) {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form noValidate autoComplete="off">
            <div className={classes.root}>
                <TextField
                    onChange={handleChange}
                    label="Leave comments here"
                    multiline
                    defaultValue=""
                    rows={7}
                    variant="outlined"
                />
            </div >
            <div className={'buttons'} >
                <RedButton onClick={props.directPrevious} >
                    PREVIOUS
                </RedButton>
                <GreenButton onClick={() => {
                    props.directNext();
                    props.dispatchComments(value)
                }}>
                    NEXT
                </GreenButton>
            </div>
        </form>
    );
}