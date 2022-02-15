import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {add} from "./slice";

const Test = () => {
    const value = useSelector((state) => state);
    const dis = useDispatch();
    console.log(value)
    return <>
    <div>
        {value}
    </div>
        <div>
            <button className="btn" onClick={() => dis(add())}>add</button>
        </div>
    </>
}
export default Test;