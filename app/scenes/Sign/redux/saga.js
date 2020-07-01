import { takeLatest, put } from 'redux-saga/effects';
import Logger from 'utils/logger';
import * as actionsSession from 'service/commonService/actions';
import * as api from './api';
import * as actions from './actions';
import * as types from './types';

function* requestLogin({ payload }) {
  const { values, callback } = payload || {};
  try {
    const response = yield api.login(values);
    if (response) {
      yield put(actionsSession.updateToken(response.token));
      yield put(actions.loginSuccess(response?.user));
      callback && callback();
    }
  } catch (error) {
    Logger.error(error);
  }
}

function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, requestLogin);
}

export default authSaga;
