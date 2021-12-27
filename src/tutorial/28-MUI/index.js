import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const Setup = () => {
    const [state, setState] = useState(['sa']);


    return <>
        <Autocomplete
            limitTags={1}
            multiple={true}
            freeSolo={true}
            value={state}
            onChange={(e,v) => setState(v)}
            options={['sa','das','jhf','rwe','vcx']}
            groupBy={(o) => o.id}
            sx={{width:300}}
            
            renderInput={(params) => <TextField {...params} label='movies'/>
        }
        />
    <div>{state}</div>
    </>
}
export default Setup ;