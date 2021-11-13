import React, {useEffect, useState} from "react";

const Setup = () => {
    type Data = {
        id:number
        url:string,
        location:string,
        company:string,
    }
    const defaultData:Data = {id:0, url:'', location:'', company:''}
    const [documentTitle, setDocumentTitle] = useState('useEffect');
    const [data, setData] = useState(defaultData);
    useEffect(() => {
        document.title = documentTitle
    },[documentTitle])

    useEffect(() => {
        fetch('https://api.github.com/users/alivarastepour').then(x => x.json()).then(y => setData(y));
        console.log(typeof data)
    },[])


    return <>
        <div className='item'>
            {data &&
                <div>
                    <div>{data.id}</div>
                    <div>{data.url}</div>
                    <div>{data.location}</div>
                    <div>{data.company}</div>
                </div>
            }
        </div>
    </>
}
export default Setup;