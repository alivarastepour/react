import { put, takeEvery, call } from "redux-saga/effects";

export default function* watcher() {
  yield takeEvery("LOAD", worker);
}
function* worker() {
  const payload = yield call(load);
  yield put({ type: "REQ", payload });
}
const load = () => {
  return fetch("https://api.github.com/users/alivarastepour").then((a) =>
    a.json()
  );
};
