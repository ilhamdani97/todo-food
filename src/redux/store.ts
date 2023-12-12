import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";
import storage from './storage';
import { rootReducer } from './reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
};


const persistedReducer  = persistReducer(persistConfig, rootReducer) ;

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),

})

const persistor = persistStore(store);

export { persistor, store };
