import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Thanks extends Component {
    next = () => {this.props.history.push('/')}
    render() { 
        return (
            <div>
                 <h1> THANKS!!! </h1>
               
                <Button display="inline" variant="outlined" color="primary" onClick={this.next}> HOME </Button>
            </div>
        );
    }
}

export default Thanks;
