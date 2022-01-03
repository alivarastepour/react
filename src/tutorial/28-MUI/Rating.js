import Rating from '@mui/material/Rating';
import React from 'react';
const Setup = () => {
    return <>
        <Rating readOnly value={4} size='large'/>
        <Rating disabled size='small'/>
        <Rating size='medium' highlightSelectedOnly/>
    </>
}
export default Setup;