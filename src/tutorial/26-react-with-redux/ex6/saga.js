import { put, takeEvery, call } from "redux-saga/effects";

export default function* watcher() {
  yield takeEvery("LOAD", worker);
}
function* worker(action) {
  const payload = yield call(load, action.payload);
  yield put({ type: "REQ", payload });
}
const load = (url) => {
  return fetch(url).then((a) => a.json());
};
