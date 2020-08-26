import React, { Component } from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';
import backGroundStyle from '../Background/Background';

class PageTwo extends Component {
    radioValue = (value) => {
        this.props.dispatch({ type: 'SET_UNDERSTAND', payload: value })
    }

    directNext = () => {
        if (this.props.understanding === 0) {
            return
        } else
            this.props.history.push('/pageThree')
    }

    directPrevious = () => {
        this.props.dispatch({ type: 'SET_UNDERSTAND', payload: 0 })
        this.props.dispatch({ type: 'SET_FEELING', payload: 0 })
        this.props.history.push('/pageOne')
    }

    render() {
        return (
            <div style={backGroundStyle}>
                <h2> How well are you understanding the content? </h2>
                <RadioButtons
                    valueGetter={this.radioValue}
                    directNext={this.directNext}
                    directPrevious={this.directPrevious}
                />
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        understanding: reduxState.feedbackValues.understanding,
        feeling: reduxState.feedbackValues.feeling,
    }
}

export default connect(mapStateToProps)(PageTwo)
