import React, { useContext, useEffect, useState } from "react";
import { CookieConsentContext } from "../../context/CookieConsentContext";
import "./cookieConsent.scss";

const CookieConsent = () => {
    const { cookieConsent, acceptCookies, declineCookies } =
        useContext(CookieConsentContext);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, [cookieConsent]);

    if (!showBanner) return null;

    return (
        <div className="cookie-banner">
            <p>
                We use cookies to improve your experience. Do you accept
                cookies?
            </p>
            <button onClick={acceptCookies}>Accept</button>
            <button onClick={declineCookies}>Decline</button>
        </div>
    );
};

export default CookieConsent;
