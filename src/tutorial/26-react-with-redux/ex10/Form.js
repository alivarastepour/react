import {useDispatch, useSelector} from "react-redux";
import {setAge, setName} from "./slice";
import {useEffect} from "react";

const Form = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state);
    useEffect(() => {
        dispatch({type:'LOAD_DATA'})
    },[])
    return <>
        <label htmlFor="n">name </label>
        <input onChange={(e) => dispatch(setName(e.target.value))} type="text" id='n' className='form'/>
        <br/>
        <label htmlFor="a">age </label>
        <input onChange={(e) => dispatch(setAge(e.target.value))} type="number" id='a' className='form'/>
        <div>
            <h1>values:</h1>
            <h3>age : {value.age}</h3>
            <h3>name : {value.name}</h3>
        </div>
        <div>
            <h1>data:</h1>
            <div>

                {value.data.id}
            </div>
            <div>

            </div>
            {value.data.login}
        </div>
    </>
}
export default Form