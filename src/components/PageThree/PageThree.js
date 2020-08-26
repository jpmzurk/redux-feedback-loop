import React, { Component } from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';
import backGroundStyle from '../Background/Background';

class PageThree extends Component {
    //getting values of radio buttons and dispatching
    radioValue = (value) => {
        this.props.dispatch({ type: 'SET_SUPPORTED', payload: value })
    }

    directNext = () => {
        if (this.props.support === 0) {
            return
        } else
            this.props.history.push('/pageFour')
    }
    directPrevious = () => {
        this.props.dispatch({ type: 'SET_UNDERSTAND', payload: 0 })
        this.props.dispatch({ type: 'SET_SUPPORTED', payload: 0 })
        this.props.history.push('/pageTwo')
    }

    render() {
        return (
            <div style={backGroundStyle}>
                <h2> How well are you being supported? </h2>
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
        support: reduxState.feedbackValues.support
    }
}

export default connect(mapStateToProps)(PageThree);
