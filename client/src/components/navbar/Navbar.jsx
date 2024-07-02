import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [open, setOpen] = useState(false);
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
                    <a href="/">Contacts</a>
                    <a href="/">About</a>
                </div>
                <div className="right">
                    <a href="/">Sign in</a>
                    <a href="/" className="register">
                        Sign up
                    </a>
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
                        <a href="/">Contacts</a>
                        <a href="/">About</a>
                        <a href="/">Sign in</a>
                        <a href="/">Sign up</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
