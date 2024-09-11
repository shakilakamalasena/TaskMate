import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { CookieConsentProvider } from "./context/CookieConsentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CookieConsentProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </CookieConsentProvider>
    </React.StrictMode>
);
