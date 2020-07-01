import { combineReducers } from 'redux';
import languageReducer from 'service/language/reducer';
import sessionReducer from 'service/commonService/reducer';
export default combineReducers({
  language: languageReducer,
  session: sessionReducer,
});
