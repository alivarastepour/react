import {useEffect, useState} from "react";

const useData = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('https://api.github.com/users').then(a => a.json()).then(b => setData(b))
    }

    useEffect(() => {
        fetchData()
    })
    return data
}
export default useData;