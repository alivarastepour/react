import React from "react";


const Setup = () => {

    const getHour = ():number => {
        const date = new Date();
        return date.getHours();
    }
    const sample = (str:string, num: number):string => {
        return str + num ;
    }

    return <>
        <h2>{sample('hello it\'s', getHour())} o'clock and im using typescript</h2>
    </>
}

export default Setup;





