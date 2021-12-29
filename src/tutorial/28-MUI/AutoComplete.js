import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Setup = () => {
    const [state, setState] = useState(['sa']);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users').then(a => a.json()).then(b=>setData(b));
    },[])
    console.log(data);
    return <>
        <Autocomplete
        options={data}
        getOptionLabel={(a) => a.login}
        renderInput={(p) => <TextField {...p} label='address'/>}
        multiple={true}
        sx={{width:400}}
        limitTags={2}
        />
    </>
}
export default Setup ;