import { takeEvery, call, put } from "redux-saga/effects";
export default function* watcher() {
  yield takeEvery("REQ", worker);
}
function* worker() {
  const payload = yield call(getData);
  yield put({ type: "LOAD", payload });
}
const getData = () => {
  return fetch("https://api.github.com/users/alivarastepour").then((a) =>
    a.json()
  );
};
