import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useState } from 'react';
import { AmberRadio, GreenRadio, RedRadio, RedButton, GreenButton } from '../Buttons/Buttons'

export default function RadioButtons(props) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        props.valueGetter(Number(event.target.value));
        setHelperText('');
        setError(false);
    };

    const emptyValue = () => {
        if (value === '') {
            setHelperText('You must select a number!');
            setError(true);
        }
    }

    return (
        <FormControl component="fieldset" error={error}>
            <FormLabel component="legend" ></FormLabel>
            <RadioGroup aria-label="numberScale" row={true} value={value}
                onChange={handleChange}>
                <FormControlLabel value="1" control={<RedRadio />} label="1" />
                <FormControlLabel value="2" control={<AmberRadio />} label="2" />
                <FormControlLabel value="3" control={<AmberRadio />} label="3" />
                <FormControlLabel value="4" control={<AmberRadio />} label="4" />
                <FormControlLabel value="5" control={<GreenRadio />} label="5" />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <div className={'buttons'}>
                <RedButton onClick={props.directPrevious}>
                    PREVIOUS
                </RedButton>
                <GreenButton onClick={() => { props.directNext(); emptyValue(); }}>
                    NEXT
                </GreenButton>
            </div>
        </FormControl>
    );
}