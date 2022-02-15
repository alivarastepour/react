import {dub} from "./actionCreators";

export const middleware = (dispatch) => {
    return next => {
        return action => {
           switch (action.type){
               case 'ADD':
                   console.log('add')
                   break;
               case 'SUB':
                   console.log('SUB');
                   break
               case 'DUB':
                   console.log('dub')
                   break
           }
           return next(action);
        }
    }
}