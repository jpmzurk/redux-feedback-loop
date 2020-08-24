import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AdminTable from '../AdminTable/AdminTable';
import {GreenButton} from '../Buttons/Buttons';

const background = {
    backgroundColor: '#F6F6F6',
    paddingBottom: '15em',
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
            setFeedback(response.data)
          }).catch(error => {
            alert('error in get')
          })
    }

    return (
        <div style= {background}>  
         <h1 style={{marginTop: '-1em', marginBottom: '1em', color: '#4a4a45'}}> Admin Page</h1>
            <AdminTable feedback={feedback} getValues={getValues}/>
            <GreenButton onClick={next} style={{marginTop: '2em'}}> HOME </GreenButton>
        </div>
    );
}

export default Admin;
