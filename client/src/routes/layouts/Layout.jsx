import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CookieConsent from "../../components/cookieConsent/CookieConsent";

const Layout = () => {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
                <CookieConsent />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

const RequireAuth = () => {
    const { currentUser } = useContext(AuthContext);

    return !currentUser ? (
        <Navigate to="/login" />
    ) : (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export { Layout, RequireAuth };
