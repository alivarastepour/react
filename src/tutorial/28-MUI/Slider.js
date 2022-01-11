import { Slider } from "@mui/material";
import React, { useState } from "react";
const Setup = () => {
    const [state,setState] = useState(1);

    const marks= [
        {value:10, label:'min'},{value:200000, label:'max'}
    ]
    const scale = (value) => {return 10 ** value};
    return <>
        <Slider
        max={200000}
        min={10}
        value={state}
        onChange={(e) => setState(e.target.value)}
        size="medium"
        sx={{width:200}}
        marks={marks}
        valueLabelDisplay="auto"
        color="secondary"
        scale={scale}
        />
        <div>{state}</div>
        </>
}
export default Setup;