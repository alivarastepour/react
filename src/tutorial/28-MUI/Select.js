import React from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const Setup = () => {
    return <>
        <Select placeholder="salamp" variant="standard" sx={{width:300}} 
        label="salam">
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
        </Select>
    </>
}
export default Setup