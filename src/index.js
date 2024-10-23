import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./store/store"; // Adjust the path as needed
import App from "./App";

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
