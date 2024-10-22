import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const appStatePersistConfig = {
  key: "appState",
  storage,
};

const authStatePersistConfig = {
  key: "authState",
  storage,
};

const persistedAppStateReducer = persistReducer(
  appStatePersistConfig,
  appStateSlice
);

export const store = configureStore({
  reducer: {
    appState: persistedAppStateReducer,
    // Add other reducers here if needed
  },
});

export const persistor = persistStore(store); // Persistor for rehydration

export type RootState = ReturnType<typeof store.getState>;
