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
                <p> {this.props.feeling} </p>
                <p> {this.props.understanding} </p>
                <p> {this.props.supported} </p>
                <p> {this.props.comments} </p>
                {/* <p> {this.props.comments} </p> */}
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
                    SUBMIT
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feeling: reduxState.feedbackValues.feeling,
        understanding: reduxState.feedbackValues.understanding,
        supported: reduxState.feedbackValues.supported,
        comments: reduxState.feedbackValues.comments,
        // comments: reduxState.comments
    }
}

export default connect(mapStateToProps)(ReviewFeedback);
