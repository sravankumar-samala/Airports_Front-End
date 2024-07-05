import { useEffect } from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { useNavigate, useHref, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { useAirportsContext } from "./context/airportsContext";

const ParticulerPort = () => <h1>Particular Port</h1>;

function App() {
  const { isDarkTheme, handleDispatch } = useAirportsContext();
  const navigate = useNavigate();

  useEffect(() => {
    function handleIsDarkThemeChange(e) {
      handleDispatch("setIsDarkTheme", e.matches);
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleIsDarkThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleIsDarkThemeChange);
    };
  }, []);

  return (
    <Provider
      theme={defaultTheme}
      colorScheme={isDarkTheme ? "dark" : "light"}
      router={{ navigate, useHref }}
    >
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/airport/:id" element={<ParticulerPort />} />
      </Routes>
    </Provider>
  );
}

export default App;
