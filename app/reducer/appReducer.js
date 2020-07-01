import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import dataReducer from './data';
import serviceReducer from './service';
/**
 * Combine all reducers in this file and export the combined reducers.
 */

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
// const createReducer = () => (injectedReducers = {}) =>
//   combineReducers({
//     global: globalReducer,
//     language: languageProviderReducer,
//     router: connectRouter(history),
//     data: dataReducer,
//     ...injectedReducers,
//   });
const rootReducer = combineReducers({
  global: globalReducer,
  router: connectRouter(history),
  service: serviceReducer,
  data: dataReducer,
});
const appReducer = (state, action) => rootReducer(state, action);
export default appReducer;
