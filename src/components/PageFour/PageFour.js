import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class PageFour extends Component {
    //local state only
    state = {
        checkedValue: ''
    }

    radioValue = (newState) => {
        this.setState({
            checkedValue: newState
        })
        console.log(newState);
        this.props.dispatch({ type: 'ADD_VALUE', payload: newState })
    }

    // directNext = () => {
    //     if (this.state.checkedValue === '') {
    //         return
    //     } else 
    //         this.props.history.push('/reviewFeedback')
    // }
    directNext = () => { this.props.history.push('/reviewFeedback') }
    directPrevious = () => { this.props.history.push('/pageThree') }
    render() {
        return (
            <div>
                <h2> Any comments you want to leave?</h2>
                {/* <RadioButtons
                    directNext={this.directNext}
                    directPrevious={this.directPrevious}
                /> */}
                 <Button display="inline" variant="outlined" color="primary"
                    onClick={this.directPrevious}>
                    PREVIOUS
                </Button>
                <Button display="inline" variant="outlined" color="primary"
                    onClick={this.directNext}>
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

export default connect(mapStateToProps)(PageFour);
