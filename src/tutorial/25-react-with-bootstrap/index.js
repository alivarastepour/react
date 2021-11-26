import React from "react";
import {useFetch} from "../9-custom-hooks/final/2-useFetch";
import Users from "./users";
import {Spinner} from "./spinner";



const Setup = () => {
    const {loading, products} = useFetch('https://api.github.com/users');
    return <>
        {
            loading ? <Spinner/> : <Users users={products}/>
        }
    </>
}

export default Setup;