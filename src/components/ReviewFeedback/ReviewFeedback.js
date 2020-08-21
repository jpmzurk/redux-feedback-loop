import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {

    next = () => {
        this.props.history.push('/thanks')
    }
    render() {
        return (
            <div>
                <h1> Review your Feedback </h1>
                <Button onClick={this.next}> SUBMIT </Button>

            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feedbackValues : reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(ReviewFeedback);
