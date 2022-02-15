import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {add, sub, dub} from "./slice";



const Content = () => {
    const val = useSelector((state) => state.reducer.count);
    const disp = useDispatch();
    return <>
        <div>
            {val}
        </div>
        <div>
            <button onClick={() => disp(add())}>add</button>
            <button onClick={() => disp(sub())}>sub</button>
            <button onClick={() => disp(dub())}>dub</button>
        </div>
    </>
}

export default Content;