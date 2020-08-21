import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';

class PageOne extends Component {
    radioValue = (newState) => {
        console.log(newState)
        this.props.dispatch({ type: 'ADD_VALUE', payload: newState })
    }

    next = () => { this.props.history.push('/pageTwo') }
    render() {
        return (
            <div>
                <p>PageOne </p>
                <p> How are you feeling today?</p>
                <RadioButtons stateValue={this.radioValue} />
                <Button onClick={this.next}> Next </Button>
                <p> {this.props.feedbackValues} </p>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feedbackValues: reduxState.feedbackValues
    }
}

export default connect(mapStateToProps)(PageOne);
