import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./authSlice"; // Adjust according to your file structure
import gameReducer from "./gameSlice"; // Adjust according to your file structure

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

// Create the persistor
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor }; // Correct export syntax
