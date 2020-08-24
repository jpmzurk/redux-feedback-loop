import React, { Component } from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';
import backGroundStyle from '../Background/Background';

class PageOne extends Component {

    radioValue = (value) => {
        this.props.dispatch({ type: 'SET_FEELING', payload: value })
    }

    directNext = () => {
        console.log(this.props.feeling);
        if (this.props.feeling === 0) {
            return
        } else {
            this.props.history.push('/pageTwo')
        }
    }

    directPrevious = () => {
        this.props.dispatch({ type: 'SET_FEELING', payload: 0 })
        this.props.history.push('/name')
    }

    render() {
        return (
            <div style={backGroundStyle}>
                <h2> How are you feeling today?</h2>
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
        feeling: reduxState.feedbackValues.feeling
    }
}

export default connect(mapStateToProps)(PageOne);
