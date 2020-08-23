import React, { Component } from 'react';
import {GreenButton} from '../Buttons/Buttons';
import backGroundStyle from '../Background/Background';

class Start extends Component {
    next = () => {
        this.props.history.push('/PageOne')
     }
    render() {
        return (
            <div style={backGroundStyle}>
                <h1> Start your FeedBack </h1>
                <GreenButton onClick={this.next}> START </GreenButton>
            </div>
        );
    }
}

export default Start;
