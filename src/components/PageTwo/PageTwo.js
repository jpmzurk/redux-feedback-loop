import React, { Component } from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';

class PageTwo extends Component {
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

    directNext = () => {
        if (this.state.checkedValue === '') {
            return
        } else 
            this.props.history.push('/pageThree')
    }
   
    directPrevious = () => { this.props.history.push('/pageOne') }

    render() {
        return (
            <div>
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
        feedbackValues: reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(PageTwo);
