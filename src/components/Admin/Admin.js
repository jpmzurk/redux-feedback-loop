import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AdminTable from '../AdminTable/AdminTable';
import {GreenButton} from '../Buttons/Buttons';

const background = {
    backgroundColor: '#F6F6F6',
    paddingBottom: '40em',
}


const Admin = (props) => {
    const [feedback, setFeedback] = useState([]);
    const next = () => {
        props.history.push('/')
     }
    useEffect(() => {
       getValues();
    }, [])

    function getValues () {
        axios.get('/feedback')
          .then(response => {
            console.log(response.data);
            // this.props.dispatch({ type: 'SET_ALL_VALUES', payload: response.data })
            setFeedback(response.data)
          }).catch(error => {
            alert('error in get')
          })
    }
    console.log(feedback);
    
    return (
        <div style= {background}>  
         <h1 > Admin Page</h1>
            <AdminTable feedback={feedback}/>
            <GreenButton onClick={next} style={{marginTop: '2em'}}> HOME </GreenButton>
        </div>
    );
}

export default connect()(Admin);
