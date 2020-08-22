import React, { Component } from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';

class PageThree extends Component {
    //local state only
    state = {
        checkedValue: ''
    }
    //getting values of radio buttons and dispatching
    radioValue = (newState) => {
        this.setState({
            checkedValue: newState
        })
        console.log(newState)
        this.props.dispatch({ type: 'ADD_VALUE', payload: newState })
    }
    //stopping 
    directNext = () => {
        if (this.state.checkedValue === '') {
            return
        } else
            this.props.history.push('/pageFour')
    }
    directPrevious = () => { this.props.history.push('/pageTwo') }

    render() {
        return (
            <div>
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
        feedbackValues: reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(PageThree);
