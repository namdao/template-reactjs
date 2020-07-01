import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { signReducer } from 'scenes/Sign/redux/reducer';
import { compareObject } from 'utils/utility';

export const initialState = {
  id: null,
  email: '',
  username: '',
  first_name: '',
  last_name: '',
  roles: [],
  phone: '',
  created_time: '',
};

export const userReducer = (state = initialState, { type, payload }) => {
  if (type === 'RESET_ALL_STATE') {
    return initialState;
  }
  const stateReducer = signReducer(state, { type, payload });
  const compare = compareObject(stateReducer, state);
  if (!compare) {
    return stateReducer;
  }
  return state;
};

const persistConfig = {
  key: 'app:userReducer',
  storage,
  whitelist: [
    'id',
    'email',
    'username',
    'first_name',
    'last_name',
    'roles',
    'created_time',
    'phone',
  ],
  blacklist: [],
  timeout: null,
};

export const reducer = persistReducer(persistConfig, userReducer);
