import React, { useState, useCallback } from 'react'
const funccount = new Set();
const Setup = () => {


    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    let c = 2 ;
    const d = useCallback(() => {
        c++;
    },[c])

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    },[count])
    const decrementCounter = useCallback(() => {
        setCount(count - 1)
    },[count])

    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    },[number])
    // const incrementCounter = () => {
    //     setCount(count + 1)
    // }
    // const decrementCounter = () => {
    //     setCount(count - 1)
    // }
    //
    // const incrementNumber = () => {
    //     setNumber(number + 1)
    // }
    //
    // funccount.add(incrementCounter);
    // funccount.add(decrementCounter);
    // funccount.add(incrementNumber);
    funccount.add(d);
    console.log(funccount)

    return (
        <div>
            Count: {count}
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                increase number
            </button>
            <div>{funccount.size}</div>
        </div>
    )
}


export default Setup;
