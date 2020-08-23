import React, { Component } from 'react';
import { GreenButton} from '../Buttons/Buttons';

class Thanks extends Component {
    next = () => {this.props.history.push('/')}
    render() { 
        return (
            <div>
                 <h1> SUCCESS! </h1>
                 <h2> Thanks for recording your feedback! </h2>
                <GreenButton onClick={this.next}> HOME </GreenButton>
            </div>
        );
    }
}

export default Thanks;
