export const initState = {
    counter:0,
    start:false,
}
const reducer = (state, action) => {
    let newState ;
    switch (action.type){
        case 'start':
            newState = {...state, start: true};
            break;
        case 'add':
            newState = {...state, counter: state.counter+1};
            break;
        case 'stop':
            newState = {...state, start: false};
            break;
        case 'reset':
            newState = {...state, counter: 0};
            break;
        default:
            break;

    }
    return newState;
}
export default reducer;