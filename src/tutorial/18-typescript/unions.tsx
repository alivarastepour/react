import React from "react";


const Setup = () => {

    type test = string | number;

    const func = (param: test) => {
        return 'the value is : ' + param + ' and the type is : ' + typeof param
    }


    return <>
        <div>{func('23')}</div>
        <div>{func(new Date().getHours())}</div>
    </>;
}

export default Setup;





