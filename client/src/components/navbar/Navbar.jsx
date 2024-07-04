import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <nav>
                <div className="left">
                    <a href="/" className="logo">
                        <img src="/logo.png" alt="logo" />
                        <span>TaskMate</span>
                    </a>
                    <a href="/">Home</a>
                    <a href="/list">Browse</a>
                    <a href="/contactus">Contact Us</a>
                    <a href="/about">About</a>
                </div>
                <div className="right">
                    {currentUser ? (
                        <div className="user">
                            <img
                                src={currentUser.avatar || "/noavatar.jpg"}
                                alt=""
                            />
                            <span>{currentUser.name}</span>
                            <Link to="/profile" className="profile">
                                <span>Profile</span>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <a href="/login">Sign in</a>
                            <a href="/register" className="register">
                                Sign up
                            </a>
                        </>
                    )}
                    <div className="menuIcon">
                        <img
                            src="/menu.png"
                            alt=""
                            onClick={() => setOpen((prev) => !prev)}
                        />
                    </div>
                    <div className={open ? "menu active" : "menu"}>
                        <a href="/">Home</a>
                        <a href="/list">Browse</a>
                        <a href="/contactus">Contact Us</a>
                        <a href="/about">About</a>
                        <a href="/login">Sign in</a>
                        <a href="/register">Sign up</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
