import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

export function* watcher(){
    yield takeEvery('LOAD_DATA', worker);
}

function* worker(){
    const {data} = yield call(loadData);
    yield put({type:'mySlice/setData', payload:data})
}

const loadData = () => {
    return axios.get('https://api.github.com/users/alivarastepour')
}