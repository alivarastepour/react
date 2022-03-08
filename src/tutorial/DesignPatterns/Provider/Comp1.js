import {createContext, useState} from "react";
import WithContext from "./withContext";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

export const ThemeContext = createContext();
const Setup = () => {
    const [state, setState] = useState('dark');
    return <>
        <WithContext ThemeContext={ThemeContext} state={state} setState={setState}>
            <Comp2/>
            <Comp3/>
        </WithContext>
    </>
}
export default Setup;