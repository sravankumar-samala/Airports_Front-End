/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useContext } from "react";
import { airportsList } from "../data/airportsData";

const AirportsContext = createContext();

const initialState = {
  isDarkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
  airportsList,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setIsDarkTheme":
      return { ...state, isDarkTheme: action.payload };
    default:
      throw new Error("Unknown action");
  }
};

function AirportsContextProvider({ children }) {
  const [{ isDarkTheme, airportsList }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleDispatch = (type, payload) => dispatch({ type, payload });

  return (
    <AirportsContext.Provider
      value={{
        isDarkTheme,
        airportsList,
        handleDispatch,
      }}
    >
      {children}
    </AirportsContext.Provider>
  );
}

function useAirportsContext() {
  const context = useContext(AirportsContext);
  if (context === undefined)
    throw new Error("Context was used outside the Context Provider.");
  return context;
}

export { useAirportsContext, AirportsContextProvider };
