import React from "react";

const Setup = () => {
    type arrayString = Array<string>;
    let ans:string = '';
    const func = (param: arrayString) => {
        for (let i = 0; i < param.length; i++) {
            ans += param[i] + " "
        }
        return ans;
    }
    const array:arrayString = ["a",'n']
    return <>
        <div>{func(array)}</div>
    </>
}

export default Setup;