import {useEffect} from "react";
import useCustomContext from "./useCustomContext";

export default () => {
    const {state, setState} = useCustomContext();
    useEffect(() => {
        setState('blue')
    }, [])
    return <>
        <div>
            state from c3 : {state}
        </div>
    </>
}