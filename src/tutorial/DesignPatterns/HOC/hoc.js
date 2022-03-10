import {Fragment, useEffect, useState} from "react";

const Data = (props) => {
    return <>
        {
            props.data && props.data.length && props.data.map(a => {
                return <Fragment key={a.id}>
                    <div>{a.id}</div>
                    <div>{a.login}</div>
                </Fragment>
            })
        }
    </>
}

const WithLoad = (Component) => {

    return props => {
        const [data, setData] = useState({});
        useEffect(() => {
            async function getData() {
                const res = await fetch("https://api.github.com/users");
                const data = await res.json();
                setData(data);
            }
            getData();
        }, [])
        return <Component {...props} data={data}/>
    }
}
export default WithLoad(Data);