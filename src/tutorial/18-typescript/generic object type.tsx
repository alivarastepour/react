import React from "react";




const Setup = () => {
    type x<T, U> = {
        address:T,
        age:U
    }

    const sample:x<string, number> = {address:'x alley', age:19};
    return <div>
        <h1>sample </h1>
        <h3>{sample.age} in {sample.address}</h3>

    </div>

}
export default Setup;