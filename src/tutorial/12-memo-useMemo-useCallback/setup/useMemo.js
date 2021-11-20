import React, {useEffect, useMemo, useState} from "react";

const url = 'https://api.github.com/users' ;

const Setup = () => {
    const [value, setValue] = useState([]);
    const fetchData = async() =>  {
        await fetch(url).then(c => c.json()).then(a => setValue(a));
    }
    useEffect(() => {
        fetchData();
    },[url])

    const ln = () => {
        if (value.length === 0)
            return
        let t = value[0].login;
        for (let i = 1; i < value.length; i++) {
            if (value[i].login.length > t.length)
                t = value[i].login
        }
        return t
    }

    const longName = useMemo(() => ln(), [url, value.length])

    return <>
        <h3>longest name : {longName}</h3>
        {
            value && value.map(a => {
                return (
                    <div key={a.id}>{a.login}</div>
                )
            })
        }


    </>

}
export default Setup;