/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useContext } from "react";

const AirportsContext = createContext();

const initialState = {
  isDarkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches,
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
  const [{ isDarkTheme }, dispatch] = useReducer(reducer, initialState);

  const handleDispatch = (type, payload) => dispatch({ type, payload });

  return (
    <AirportsContext.Provider
      value={{
        isDarkTheme,
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
