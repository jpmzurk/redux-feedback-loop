import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
}));

export default function MultilineTextFields(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    onChange={handleChange}
                    label="Leave comments here"
                    multiline
                    defaultValue=""
                    rows={8}
                    variant="outlined"
                />
            </div>
            <Button
                display="inline" variant="outlined" color="primary"
                onClick={props.directPrevious}>
                PREVIOUS
            </Button>
            <Button
                display="inline" variant="outlined" color="primary"
                onClick={() => {
                    props.directNext();
                    props.dispatchComments(value)
                }}>
                Next
            </Button>

        </form>
    );
}