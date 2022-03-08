import useCustomContext from "./useCustomContext";

export default () => {
    const {state} = useCustomContext();
    return <>
        <div>
            state from c2 : {state}
        </div>
    </>
}