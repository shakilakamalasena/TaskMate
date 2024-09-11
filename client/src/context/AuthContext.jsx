import { createContext, useContext, useEffect, useState } from "react";
import { CookieConsentContext } from "./CookieConsentContext";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(
    //     JSON.parse(localStorage.getItem("user")) || null
    // );
    const { cookieConsent } = useContext(CookieConsentContext);

    const [currentUser, setCurrentUser] = useState(() => {
        const user = localStorage.getItem("user");
        try {
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            return null;
        }
    });

    const updateUser = (data) => {
        setCurrentUser(data);
    };

    const clearUser = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
    };


    useEffect(() => {
        if (cookieConsent === "false") {
            sessionStorage.setItem("user", JSON.stringify(currentUser));
            localStorage.removeItem("user");
        } else {
            localStorage.setItem("user", JSON.stringify(currentUser));
            sessionStorage.removeItem("user");
        }

        // localStorage.setItem("user", JSON.stringify(currentUser));
    }, [cookieConsent, currentUser]);

    // event to clear the user data from sessionStorage when the session ends if cookieConsent is "false"
    useEffect(() => {
        if (cookieConsent === "false") {
            window.addEventListener("beforeunload", clearUser);
            return () => window.removeEventListener("beforeunload", clearUser);
        }
    }, [cookieConsent]);

    return (
        <AuthContext.Provider value={{ currentUser, updateUser, clearUser }}>
            {children}
        </AuthContext.Provider>
    );
};
