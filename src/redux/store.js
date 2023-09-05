import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { contactsReducer } from 'redux/contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './filter/filterSlice';

import { authReducer } from './auth/authSlice';
import { personsReducer } from './persons/personsSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })

const authPersistConfig = {
  key: `auth`,
  storage,
  whitelist: [`accessToken`, 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    persons: personsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === `development`,
});

export const persistor = persistStore(store);