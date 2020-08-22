import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


export default function RadioButtons (props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(Number(event.target.value));
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
      <FormLabel component="legend"  required>Choose one</FormLabel>
      <RadioGroup aria-label="numberScale" 
         row={true}
        name="scale" 
        value={value} 
        onChange={handleChange}>
                
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    <div style={{ display: 'inline-flex' }}> 
      <Button 
        type="button" 
        display="inline"
        variant="outlined" 
        color="primary" 
        onClick={() => {
            props.directPrevious();
        }}> 
        PREVIOUS 
      </Button>
      <Button 
        type="button" 
        display="inline"
        variant="outlined" 
        color="primary" 
        onClick={() => {
            props.directNext();
            emptyValue();
        } }
        > 
        Next 
      </Button>
      </div>
    </FormControl>
  );
}

//