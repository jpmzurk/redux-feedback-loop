import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import TextField from '../TextField/TextField';


class PageFour extends Component {

    dispatchComments = (comments) => {
        console.log(comments);
        this.props.dispatch({ type: 'ADD_COMMENT', payload: comments })
    }

    directPrevious = () => { this.props.history.push('/pageThree') }
    directNext = () => { this.props.history.push('/reviewFeedback') }
   
   
    render() {
        return (
            <div>
                <h2> Any comments you want to leave?</h2>
                <TextField 
                    directPrevious={this.directPrevious}
                    directNext={this.directNext}
                    dispatchComments={this.dispatchComments}
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

export default connect(mapStateToProps)(PageFour);
