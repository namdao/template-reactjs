import axios from 'axios';
import { doNothing } from 'utils/utility';
import Constants from 'constants/appConstant';
import * as ErrorConstants from 'constants/errorConstant';
import Platform from 'utils/platform';
import Logger from 'utils/logger';

const { ERROR_CODES, ERROR_TYPE_CRASH } = ErrorConstants;

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

const interceptorsInstance = axios.interceptors;

/**
 * setup axios included content-type & deviceId
 */
const init = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const auth = axios.defaults.headers?.Authorization;
  if (auth) {
    headers.Authorization = auth;
  }
  axios.defaults.headers = headers;
};

/**
 * set baseUrl for axios
 * if in production environment, baseUrl alway from config
 *
 * else get from params
 *
 * TODO: This function look like weird and not consistency by the way output depend on environment values.
 * Need refactor it
 *
 * @param {String} baseUrl
 */
const setBaseUrl = () => {
  let baseURL = '';
  if (Platform.isDev) {
    // dev code
    baseURL = Constants.URL_DEVELOP;
  } else {
    // production code
    baseURL = Constants.URL_PRODUCTION;
  }
  axios.defaults.baseURL = baseURL;

  return baseURL;
};

const clearBaseUrl = () => {
  axios.defaults.baseURL = '';
};

const setHeaderToken = (newToken) => {
  if (!axios.defaults.headers || !newToken) {
    Logger.warn('-------- axios headers empty');
    return;
  }

  const bearerToken = `Bearer ${newToken}`;
  const currentToken = axios?.defaults?.headers?.Authorization || '';

  if (currentToken === bearerToken) {
    Logger.warn('-------- axios headers token SAME');
    return;
  }
  axios.defaults.headers.Authorization = bearerToken;
};

const clearHeaderToken = () => {
  axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

const getUnhandledErrorMessage = (errors) => {
  if (Platform.isProduction) return ' unknown error';
  let message;

  if (!errors) {
    message = 'empty error message';
    return message;
  }

  message = errors.message || errors.toString();
  return message;
};

const getErrorMessagesFromServer = (error) => {
  const { messages, _error, errors } = error;
  if (typeof messages === 'string') {
    return messages;
  }

  if (typeof errors === 'string') {
    return errors;
  }

  if (typeof messages === 'object') {
    const errMessage = Object.values(messages);
    return errMessage.join('');
  }
  if (Array.isArray(errors)) {
    return messages.join(' ');
  }

  if (typeof _error?.message === 'string') {
    return _error.message;
  }

  if (typeof _error === 'string') {
    return _error;
  }

  return getUnhandledErrorMessage(error);
};

const setupOnResponseInterceptors = (
  onUnAuthorized = doNothing,
  onBlacklist = doNothing,
) => {
  /**
   * handle error response
   */
  const onResponseError = (errors) => {
    let alertMessage = 'unknown error';
    const errorsData = errors;
    errorsData.messages = JSON.stringify(errors?.response);
    const { response } = errors || {};

    if (response && !response?.status) {
      switch (errors.messages) {
        case 'Network Error':
          alertMessage = 'no internet connection';
          break;
        default:
          alertMessage = getUnhandledErrorMessage(errors);
          break;
      }
      throw new Error(alertMessage);
    }

    /**
     * handle error by http error code
     */
    const code = errors?.code;
    switch (code) {
      case ERROR_CODES.BAD_REQUEST:
      case ERROR_CODES.UNAUTHORIZED:
        return onUnAuthorized();
      case ERROR_CODES.BLACKLIST:
        onBlacklist();
        break;
      default:
        alertMessage = getErrorMessagesFromServer(errors);
        break;
    }

    const finalError = new Error(alertMessage);
    finalError.code = response?.status;
    // finalError.response = errors.response;
    Logger.error(errors, ERROR_TYPE_CRASH.ERROR_API);
    throw finalError;
  };

  /**
   * handle success response
   */
  const onResponseSuccess = (response) => {
    // const authorization = response?.headers?.authorization || '';
    // if (authorization) {
    //   setHeaderToken(authorization, `onReceivedToken:${response?.config.url}`);
    //   onReceivedToken(authorization);
    // }
    const { data, errors } = response.data;
    if (errors) {
      return onResponseError(errors);
    }
    return data;
  };

  // Check interceptor DEFAULT exist in list handlers
  interceptorsInstance.response.use(onResponseSuccess, onResponseError);
  // if (interceptorsInstance?.response?.handlers?.length < 1) {
  // }
};

const SetupAxios = {
  init,
  setBaseUrl,
  clearBaseUrl,
  setHeaderToken,
  clearHeaderToken,
  setupOnResponseInterceptors,
};

export default SetupAxios;
