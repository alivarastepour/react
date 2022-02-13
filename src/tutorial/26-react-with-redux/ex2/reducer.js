const initialState = {
    count : 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, count: state.count+1}
        case 'DEC':
            return {...state, count: state.count-1}
        case 'DUB':
            return {...state, count: state.count*2}
    }
    return state;
}