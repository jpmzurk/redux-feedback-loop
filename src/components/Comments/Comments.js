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
            width: '40ch',
        },
        '& label.Mui-focused': {
            color: '#65655e',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#65655e',
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