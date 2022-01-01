import React, { useState } from "react";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";

const Setup = () => {
    const[ state, setState] = useState('')
    return <>
        <RadioGroup row={true} onChange={e => setState(e.target.value)}>
            <FormControlLabel control={<Radio/>} value='ali' label='ali'/>
            <FormControlLabel control={<Radio/>} value='mmd' label='mmd'/>
            <FormControlLabel control={<Radio/>} value='hsn' label='hsn'/>
            <FormControlLabel control={<Radio/>} value='hassan' label='hassan'/>
        </RadioGroup>
        <div>{state}</div>
    </>
}
export default Setup;