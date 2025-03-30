import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";

function ThemeWrapper() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("pixelquest-theme");
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem("pixelquest-theme", JSON.stringify(isDark));
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button
        onClick={() => setIsDark((prev: boolean) => !prev)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "12px 20px",
          background: theme.colors.primary,
          color: theme.colors.text,
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        {isDark ? "🌞 Tema Claro" : "🌙 Tema Escuro"}
      </button>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
