import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function RadioLabels({ getValue, value, responses = {} }) {
  const handleChoice = (event) => {
    getValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup>
        <RadioGroup
          defaultValue={0}
          name="radio-buttons-group"
          value={value}
          onChange={handleChoice}
        >
          {Object.keys(responses)?.map((key, index) => (
            <FormControlLabel
              key={key}
              value={index}
              control={<Radio />}
              label={responses[key]}
            />
          ))}
        </RadioGroup>
      </FormGroup>
    </FormControl>
  );
}
