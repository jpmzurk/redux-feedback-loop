import React from 'react';
import { RedButton, GreenButton } from '../Buttons/Buttons';
import { connect } from 'react-redux';
import axios from 'axios';
import backGroundStyle from '../Background/Background';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useState } from 'react';

const ReviewFeedback = (props) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const submitFeedback = (totalFeedback) => {
        axios.post('/feedback', totalFeedback)
            .then((response) => {
                props.dispatch({ type: 'CLEAR' })
                props.history.push('/thanks');
            }).catch((error) => {
                console.log(error);
            })
    }

    const directNext = () => {
        if (((props.feeling || props.understanding || props.support) === 0) || props.student === '') {
            setHelperText('Name and ratings must be completed before you can submit!');
            setError(true);
            return 
        }
        submitFeedback(props.allFeedback);
    }
    const directPrevious = () => {
        props.history.push('/pageFour')
    }
    
        return (
            <div style={backGroundStyle}>
                <section style={{ marginTop: '-2.5em' }}>
                    <FormControl component="fieldset"  error={error}>
                        <h2> Review your Feedback </h2>
                        <p> Your name: {props.student} </p>
                        <p> How you feel is about a {props.feeling} out of 5</p>
                        <p> Your understanding of the latest content is about a {props.understanding} out of 5</p>
                        <p> Your support from Prime is about a {props.support} of 5</p>
                        <p> Your comments: {props.comments} </p>
                        <FormHelperText style={{paddingLeft: '4em'}}>{helperText}</FormHelperText>
                    </FormControl >
                </section>
                <RedButton
                    onClick={directPrevious}>
                    PREVIOUS
                </RedButton>
                <GreenButton
                    onClick={directNext}>
                    SUBMIT
                </GreenButton>
            </div>
        );
    
}

const mapStateToProps = (reduxState) => {
    return {
        feeling: reduxState.feedbackValues.feeling,
        understanding: reduxState.feedbackValues.understanding,
        support: reduxState.feedbackValues.support,
        comments: reduxState.feedbackValues.comments,
        allFeedback: reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(ReviewFeedback);
