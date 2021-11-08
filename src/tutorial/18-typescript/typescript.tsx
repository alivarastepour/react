import React from "react";


const Setup = () => {
    interface d {
        state: string,
        hour: number
    }
    const f = {
        state:'',
        hour:0
    }

    const getHour = ():number => {
        const date = new Date();
        return date.getHours();
    }
    const sample = (num: number):string => {
        return num > 18 ? 'bye' : 'hello' ;
    }
    const temp:d = {state:sample(getHour()), hour:getHour()};
    const temp1 = {state:sample(getHour()), hour:getHour()}

    return <>
        <h3>ts interface:</h3>
        <h2>{temp.state}. it's {temp.hour}</h2>
        <h3>js object:</h3>
        <h2>{temp1.state}. it's {temp1.hour}</h2>
    </>;
}

export default Setup;





