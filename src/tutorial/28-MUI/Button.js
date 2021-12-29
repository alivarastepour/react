import React, { useState } from "react";
import { Button as But } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';



const Button = () => {

    const [state,setState] = useState(false);

    return <>
        <But size="large" startIcon={<DeleteIcon/>} color="secondary" variant="outlined">بزن روم</But>
        <LoadingButton 
        variant="contained" 
        loading={state}
        startIcon={<SaveIcon/>} 
        loadingPosition="start"
        onClick={() => setState(!state)}
        >
            hii
        </LoadingButton>
    </>
}

export default Button;