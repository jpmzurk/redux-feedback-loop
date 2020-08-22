import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


class ReviewFeedback extends Component {

    next = () => { this.props.history.push('/thanks') }
    back = () => { this.props.history.push('/pageFour') }
    render() {
        return (
            <div>
                <h2> Review your Feedback </h2>
                <p> {this.props.feedbackValues} </p>
                {/* <RadioButtons
                    directNext={this.directNext}
                    directPrevious={this.directPrevious}
                /> */}
                <Button display="inline" variant="outlined" color="primary"
                    onClick={this.back}>
                    PREVIOUS
                </Button>
                <Button display="inline" variant="outlined" color="primary"
                    onClick={this.next}>
                    Next
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feedbackValues: reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(ReviewFeedback);
