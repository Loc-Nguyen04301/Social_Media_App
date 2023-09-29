import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.tsx";
import AlertContextProvider from "./contexts/AlertContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <AlertContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AlertContextProvider>
  </>
);
