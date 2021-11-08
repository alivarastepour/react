import React from "react";


interface test<Type> {
    get: () => Type;
}

declare const type : test<number>;

const e = type.get();

const Setup = () => {
    return (
        <h1>{e.toString()}</h1>
    )
}


export default Setup;