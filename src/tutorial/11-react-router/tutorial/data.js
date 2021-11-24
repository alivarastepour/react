import {useEffect, useState} from "react";

const useData = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        let flag = true ;
            fetch('https://api.github.com/users').then(a => a.json()).then(b => {
                if (flag) setData(b)
            });
        return () => {
            flag = false
        }
    },[])
    return data
}
export default useData;