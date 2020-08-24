import React from 'react';
import { useState } from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/Input';
import { RedButton, GreenButton } from '../Buttons/Buttons';
import { makeStyles } from '@material-ui/core/styles';
import backGroundStyle from '../Background/Background';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function NameInput(props) {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const directNext = () => {
        console.log(inputValue);
        if (inputValue === '') {
            setHelperText('You must enter your name!');
            setError(true);
            return
        } else {
            props.dispatch({ type: 'NAME', payload: inputValue })
            props.history.push('/pageOne')
        }
    }

    const directPrevious = () => {
        props.history.push('/')
    }

    return (
        <div style={backGroundStyle}>
            <section style={{ marginTop: '-3em' }}>
                <h2> Enter your name below</h2>
                <FormControl className={classes.root} component="fieldset" error={error} noValidate autoComplete="off">
                    <TextField placeholder="Enter name here"
                        inputProps={{ 'aria-label': 'nameInput' }} 
                        onChange={handleChange} 
                        />
                    <FormHelperText>{helperText}</FormHelperText>
                    <div>
                        <RedButton onClick={directPrevious}> PREVIOUS </RedButton>
                        <GreenButton onClick={directNext}> NEXT </GreenButton>
                    </div>
                </FormControl>
            </section>
        </div>
    );
}

const mapStateToProps = (reduxState) => {
    return {
        student: reduxState.feedbackValues.student
    }
}

export default connect(mapStateToProps)(NameInput)