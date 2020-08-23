import React, { Component } from 'react';
import { RedButton, GreenButton} from '../Buttons/Buttons';
import { connect } from 'react-redux';
import axios from 'axios';
import backGroundStyle from '../Background/Background';

class ReviewFeedback extends Component {

    submitFeedback = (totalFeedback) => {
        console.log(totalFeedback);

        axios.post('/feedback', totalFeedback)
          .then((response) => {
            this.props.dispatch({ type: 'CLEAR'})
            this.props.history.push('/thanks');
          }).catch((error) => {
            console.log(error);
          })
      }



    directNext = () => {
        if ((this.props.feeling || this.props.understanding || this.props.support) === 0){
            return alert('all ratings must be entered before submitting')
        }
        this.submitFeedback(this.props.allFeedback);
    }
    directPrevious = () => { 
        this.props.history.push('/pageFour') 
        this.props.dispatch({ type: 'SET_COMMENT', payload: 'clear' })
    }
    render() {
        return (
            <div style={backGroundStyle}>
            <section style={{ marginTop : '-1em'}}>
                <h2> Review your Feedback </h2>
                <p> How you feel about a {this.props.feeling} out of 5</p>
                <p> Your understanding of the latest content is about a {this.props.understanding} out of 5</p>
                <p> Your support from Prime is about a {this.props.support} of 5</p>
                <p> Your comments: {this.props.comments} </p>
                <RedButton 
                    onClick={this.directPrevious}>
                    PREVIOUS
                </RedButton>
                <GreenButton 
                    onClick={this.directNext}>
                    SUBMIT
                </GreenButton>
            </section>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feeling: reduxState.feedbackValues.feeling,
        understanding: reduxState.feedbackValues.understanding,
        support: reduxState.feedbackValues.support,
        comments: reduxState.feedbackValues.comments,
        allFeedback : reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(ReviewFeedback);
