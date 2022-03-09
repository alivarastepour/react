import Presenter from "./Presenter";
import {useCallback, useEffect, useState} from "react";

const Container = () => {
    const [state, setState] = useState({});
    const fetchData = useCallback(async () => {
        fetch("https://api.github.com/users").then(a => a.json()).then(b => setState(b))
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    return <Presenter data={state}/>
}
export default Container;