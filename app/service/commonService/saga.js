import { takeLatest, put } from 'redux-saga/effects';
import * as signActions from 'scenes/Sign/redux/actions';
// import * as configActions from 'services/Config/actions';
import { push } from 'connected-react-router';
import Logger from 'utils/logger';
import RouteConstants from 'service/routes/constants';
import * as types from './types';
import * as api from './api';
import * as actions from './actions';

function* checkAutoLogin() {
  try {
    const response = yield api.getMe();
    if (response) {
      yield put(signActions.loginSuccess(response?.user));
    }
  } catch (error) {
    yield put(push(`/${RouteConstants.PUBLIC.SIGN_IN}`));
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
