import React from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green, red} from '@material-ui/core/colors';


const GreenButton = withStyles({
    root: {
        display: 'inline',
        color:  green[900],
        backgroundColor: '#f6f6f6',
        borderColor: green[800],
        margin: '.5em',
        '&:hover': {
          color: '#FFFFFF',
          backgroundColor: green[800],
          border: 'green',
        },
    },
})((props) => <Button {...props} ></Button>);

const RedButton = withStyles({
    root: {
        display: 'inline',
        color: red[700],
        backgroundColor: '#f6f6f6',
        borderColor: red[400],
        margin: '.5em',
        '&:hover': {
            color: '#FFFFFF',
            backgroundColor: red[500],
            border: red[500],
        },
    },
})((props) => <Button {...props} ></Button>);

const GreenRadio = withStyles({
    root: {
      '&$checked': {
        color: green[700],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


const AmberRadio = withStyles({
    root: {
      '&$checked': {
        color: '#E59500',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


export {AmberRadio, RedRadio, GreenRadio, RedButton, GreenButton};
