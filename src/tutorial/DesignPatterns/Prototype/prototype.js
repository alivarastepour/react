const Prototype = () => {
    const obj = {
        name: 'ali',
        lastname: 'mamad',
        address: 'NYX',

        sayHi(){
            return 'hi'
        }
    }
    const obj1 = Object.create(obj);
    obj1.age = 12;
    const obj2 = Object.create(obj1);
    console.log(obj2);


    return<>
        salam
    </>
}
export default Prototype;