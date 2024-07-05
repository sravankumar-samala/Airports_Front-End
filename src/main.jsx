import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AirportsContextProvider } from "./context/airportsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AirportsContextProvider>
        <App />
      </AirportsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
