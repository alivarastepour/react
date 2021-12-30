import React, { useState } from "react";
import { Checkbox } from "@mui/material";

const Setup = () => {
    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(true);
    const [s3, setS3] = useState(false);
    return <>
        <Checkbox onChange={e => {
            if (s1) {
                setS1(false)
                setS2(false)
                setS3(false)
            }else{
                setS1(true)
                setS2(true)
                setS3(true)
            }
            }} size="small" indeterminate={s2 !== s3} checked={s2 && s3}/>
        <Checkbox  checked={s2} onChange={e => setS2((prev) => !prev)} size="small"/>
        <Checkbox checked={s3} onChange={e => setS3((prev) => !prev)} size="small"/>
    </>
}
export default Setup