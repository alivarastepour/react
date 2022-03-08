const myObject = {
    name:'ali',
    age:12,
    address:"NYC, Manhattan"
}
const myObjectProxy = new Proxy(myObject, {
    get: (obj, prop) => obj[prop],
    set: (obj, prop, value) => {
        switch (prop){
            case 'age':
                if (typeof value !== 'number')
                    throw new Error('age should be number')
                else if (value > 100)
                    throw new Error("age > 100")
                else{
                    obj[prop] = value;
                    return true;
                }
            break
            case 'name':
            case 'address':
                obj[prop] = value;
                return true;
            break
            default:
                throw new Error('not found')
                return false;
        }
    }
})

export default myObjectProxy;