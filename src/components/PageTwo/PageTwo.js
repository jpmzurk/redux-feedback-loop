import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import RadioButtons from '../RadioButtons/RadioButtons';
import { connect } from 'react-redux';

class PageTwo extends Component {
    radioValue = (newState) => {
        console.log(newState);
        this.props.dispatch({ type: 'ADD_VALUE', payload: newState })
    }

    next = () => {this.props.history.push('/pageThree')}
    back = () => {this.props.history.push('/pageOne')}

    render() {
        return (
            <div>
                <p>PageTwo</p>
                <p> How well are you understanding the content? </p>
                <RadioButtons stateValue = {this.radioValue}/>
                <Button onClick={this.back}> BACK </Button>
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

export default connect(mapStateToProps)(PageTwo);
