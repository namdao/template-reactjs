import { persistStore } from 'redux-persist';
import configureStore from './configureStore';

const store = configureStore();
const persistor = persistStore(store);

export default { store, persistor };
