import {ThemeContext} from "./Comp1";
import {useContext} from "react";

const useCustomContext = () => {
    return useContext(ThemeContext);
}
export default useCustomContext;