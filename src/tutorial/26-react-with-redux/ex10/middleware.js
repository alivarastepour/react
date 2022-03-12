import {setAge} from "./slice";

export const middleware = ({dispatch}) => {
    return next => {
        return action => {
            if (action.type === 'mySlice/setAge') {
                try {
                    parseInt(action.payload)
                } catch (e) {
                    return 0
                }
                if (parseInt(action.payload) > 100 || parseInt(action.payload) < 0) {
                    return 0
                }
            }
            return next(action)
        }

    }
}