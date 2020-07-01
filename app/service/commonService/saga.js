import { takeLatest, select, put, delay } from 'redux-saga/effects';
// import * as signActions from 'scenes/Sign/redux/actions';
// import * as configActions from 'services/Config/actions';
import { push } from 'connected-react-router';
import Logger from 'utils/logger';
import RouteConstants from 'service/routes/constants';
import * as types from './types';
import * as api from './api';
import * as actions from './actions';
import Selector from './selectors';

function* checkAutoLogin() {
  const state = yield select();
  const token = Selector.getToken(state);
  try {
    if (!token) {
      yield delay(100);
      yield put(push(`/${RouteConstants.PUBLIC.SIGN_IN}`));
      return;
    }
    const response = yield api.getMe();
    if (response) {
      yield put(push(`/${RouteConstants.PRIVATE.DASHBOARD}`));
      // yield put(signActions.loginSuccess(response?.user));
    }
  } catch (error) {
    Logger.error(error);
  }
}

function* logout() {
  try {
    const response = yield api.logout();
    if (response) {
      yield put(actions.resetAllApp());
    }
  } catch (error) {
    Logger.error(error);
  }
}

function* watchSession() {
  yield takeLatest(types.CHECK_AUTO_LOGIN, checkAutoLogin);
  yield takeLatest(types.LOG_OUT, logout);
}

export default watchSession;
