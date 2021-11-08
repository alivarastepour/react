import React from "react";


const Setup = () => {
    interface d {
        state: string,
        hour: number
    }

    const getHour = ():number => {
        const date = new Date();
        return date.getHours();
    }
    const sample = (num: number):string => {
        return num > 18 ? 'bye' : 'hello' ;
    }
    const temp:d = {state:sample(getHour()), hour:getHour()}

    return <>
        <h2>{temp.state}. it's {temp.hour}</h2>
    </>
}

export default Setup;





