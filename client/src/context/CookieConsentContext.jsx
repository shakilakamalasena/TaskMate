import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
    const [cookieConsent, setCookieConsent] = useState(null);

    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        setCookieConsent(consent);
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookieConsent", "true", { expires: 365 });
        setCookieConsent("true");
    };

    const declineCookies = () => {
        Cookies.set("cookieConsent", "false", { expires: 365 });
        setCookieConsent("false");
    };

    return (
        <CookieConsentContext.Provider
            value={{ cookieConsent, acceptCookies, declineCookies }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
};
