import produce from 'immer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as types from './types';

const initialState = {
  token: '',
};

const sessionReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'RESET_ALL_STATE':
        return initialState;
      case types.UPDATE_TOKEN: {
        draft.token = action.payload;
        break;
      }
      case types.CLEAR: {
        draft.token = '';
        break;
      }
      default:
        return draft;
    }
  });

const persistConfig = {
  key: 'app:session',
  storage,
  whitelist: ['token'],
  blacklist: [],
  timeout: null,
};

const reducer = persistReducer(persistConfig, sessionReducer);
export default reducer;
