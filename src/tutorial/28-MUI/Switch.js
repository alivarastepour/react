import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import { Button } from "@mui/material";

const Setup = () => {

    const [value, s] = useState(true);
    const [dis, d] = useState(true);

    return <>
        <Switch disabled={dis} checked={value} onChange={(e) => s(e.target.checked)}/>
        <Button variant="contained" onClick={() => d(!dis)}>disable</Button>
    </>
}

export default Setup;