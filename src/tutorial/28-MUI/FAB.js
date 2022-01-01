import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import React from "react";

const Setup = () => {
    return <>
        <Fab>
            <AddIcon color="info"/>
        </Fab>
        <Fab size="small" color="secondary">
            <NavigationIcon/>
        </Fab>
        <Fab variant="extended" color="secondary">
            salam
            <NavigationIcon/>
        </Fab>
    </>
}
export default Setup;