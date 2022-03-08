import myObjectProxy from "./proxy";
const Setup = () => {
    try {
        // myObjectProxy.age = 222; // throws error
        // myObjectProxy.age = "salam"; // throws error
        myObjectProxy.age = 12;
    }catch (e){
        console.log(e.message)
        myObjectProxy.age = 0;
    }
    return <>
        <div>{myObjectProxy.name}</div>
        <div>{myObjectProxy.age}</div>
        <div>{myObjectProxy.address}</div>
    </>
}

export default Setup;