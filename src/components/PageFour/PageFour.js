import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments';
import backGroundStyle from '../Background/Background';

class PageFour extends Component {
    dispatchComments = (comments) => {
        console.log(comments);
        this.props.dispatch({ type: 'SET_COMMENT', payload: comments })
    }

    directPrevious = () => {
        this.props.dispatch({ type: 'SET_SUPPORTED', payload: 0 })
        this.props.history.push('/pageThree')
    }
    directNext = () => { this.props.history.push('/reviewFeedback') }

    render() {
        return (
            <div style={backGroundStyle}>
                <section style={{ marginTop: '-3em' }}>
                    <h2> Any comments you want to leave?</h2>
                    <Comments
                        directPrevious={this.directPrevious}
                        directNext={this.directNext}
                        dispatchComments={this.dispatchComments}
                    />


                </section>
            </div>
        );
    }
}

export default connect()(PageFour);
