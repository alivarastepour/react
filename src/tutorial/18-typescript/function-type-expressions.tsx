import React from "react";


const Setup = () => {
    type funct = (str: string) => string
    const f1 = (func: funct ):string => {
        return func('Ali')
    }

    const f2 = (name:string):string => {
        return 'hello ' + name ;
    }

    return<>
        {
            f1(f2)
        }

    </>
}

export default Setup;