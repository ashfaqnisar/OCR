import { all, put, takeEvery } from 'redux-saga/effects';
import { appLoaded, LOAD } from './appActions';

function* appLoadSaga() {
  yield put(appLoaded());
}

export default function*() {
  yield all([takeEvery(LOAD, appLoadSaga)]);
}
