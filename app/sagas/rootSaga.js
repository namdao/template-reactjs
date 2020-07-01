import { all, fork } from 'redux-saga/effects';
import appSaga from './appSaga';

export default function* rootSagas() {
  const listRootAppSaga = [];
  Object.values(appSaga).map((saga) => listRootAppSaga.push(saga));
  yield all(listRootAppSaga.map((saga) => fork(saga)));
}
