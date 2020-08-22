import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Start extends Component {
    next = () => {
        this.props.history.push('/PageOne')
     }
    render() {
        return (
            <div>
                <h1> Start your FeedBack </h1>
                <Button variant="outlined" color="primary" onClick={this.next}> START </Button>
            </div>
        );
    }
}

export default Start;
