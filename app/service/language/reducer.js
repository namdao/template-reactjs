/*
 *
 * LanguageProvider reducer
 *
 */
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import produce from 'immer';
import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = {
  locale: DEFAULT_LOCALE,
};

const languageProviderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
      default:
        return draft;
    }
  });
const persistConfig = {
  key: 'app:languageReducer',
  storage,
  whitelist: null, // null is store all state in local storage
  blacklist: [],
  timeout: null,
};
const reducer = persistReducer(persistConfig, languageProviderReducer);
export default reducer;
