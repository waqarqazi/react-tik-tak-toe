import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./authSlice";
import gameReducer from "./gameSlice";

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    game: gameReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
