import React, {useCallback} from "react";
import Setup from "./container";

const Index = () => {
    const handleCLick = useCallback((e) => {
        if (!((parseInt(e.key) >= 0 && parseInt(e.key) <= 9) ||
            (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '-' || e.key === '^' || e.key === '=' || e.key === "Backspace")))
            e.preventDefault();
    },[]);
    return <>
        <Setup handleCLick={handleCLick}/>
    </>
}
export default Index ;