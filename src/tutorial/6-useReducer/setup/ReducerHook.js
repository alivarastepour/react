export const initState = {
    name:'ali',
    age:19,
    address:'22 roadIsland'
}

const reducerHook = (state, action) => {
    let newState ;
    switch (action.type) {
        case 'ageAdd':
            newState = {...state, age: state.age+1};
            break;
        case 'ageRem':
            newState = {...state, age: state.age-1};
            break;
        case 'changeAddress':
            newState = {...state, address: action.payload};
            break;
    }
    return newState ;
}
export default reducerHook;
