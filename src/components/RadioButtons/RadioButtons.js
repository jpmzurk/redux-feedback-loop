import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function RadioButtons (props) {
  const [value, setValue] = useState('3');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(Number(event.target.value));
    props.stateValue(Number(event.target.value));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose one</FormLabel>
      <RadioGroup aria-label="numberScale" 
         row={true}
        name="scale" 
        value={value} 
        onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="one" />
        <FormControlLabel value="2" control={<Radio />} label="two" />
        <FormControlLabel value="3" control={<Radio />} label="three" />
        <FormControlLabel value="4" control={<Radio />} label="four" />
        <FormControlLabel value="5" control={<Radio />} label="five" />
      </RadioGroup>
    </FormControl>
  );
}

//