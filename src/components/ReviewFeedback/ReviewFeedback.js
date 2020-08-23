import React, { Component } from 'react';
import { RedButton, GreenButton} from '../Buttons/Buttons';
import { connect } from 'react-redux';
import axios from 'axios';

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
        this.submitFeedback(this.props.allFeedback);
    }
    directPrevious = () => { 
        this.props.history.push('/pageFour') 
        this.props.dispatch({ type: 'SET_COMMENT', payload: 'clear' })
    }
    render() {
        return (
            <div style={{ marginTop : '-1em'}}>
                <h2> Review your Feedback </h2>
                <p> How you feel (1-5): {this.props.feeling} </p>
                <p> Your current understanding of content (1-5): {this.props.understanding} </p>
                <p> Your support from Prime (1-5): {this.props.support} </p>
                <p> Your comments: {this.props.comments} </p>
                <RedButton 
                    onClick={this.directPrevious}>
                    PREVIOUS
                </RedButton>
                <GreenButton 
                    onClick={this.directNext}>
                    SUBMIT
                </GreenButton>
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
