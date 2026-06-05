import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import Center from "../Slices/RegisterSlice";

const sanitizeTransform = createTransform(
  (inboundState) => {
    const { Password, ConfirmPassword, ...safeSignUp } =
      inboundState.signUp || {};
    return {
      ...inboundState,
      signUp: safeSignUp,
      errors: {},
      apiError: null,
      loading: false,
      isRegister: false,
    };
  },
  // Outbound (loading from localStorage) — no changes needed
  (outboundState) => outboundState,
  { whitelist: ["data"] },
);

const rootReducer = combineReducers({
  data: Center,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
  transforms: [sanitizeTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
