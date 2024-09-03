import "./registerForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { auth, provider, signInWithPopup } from "../../lib/firebase";
import { AuthContext } from "../../context/AuthContext";

const RegisterForm = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { currentUser, updateUser } = useContext(AuthContext);

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const name = user.displayName;
            const email = user.email;
            const username = email.split("@")[0];
            const password = user.uid;
            const avatar = user.photoURL;

            let res;
            res = await apiRequest.post("/auth/register", {
                name,
                username,
                email,
                password,
            });

            res = await apiRequest.post("/auth/login", {
                username: username,
                password: password,
            });

            updateUser(res.data);
            navigate("/");

            res = await apiRequest.put(`/users/${res.data.id}`, {
                avatar: avatar,
            });

            updateUser(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        setIsLoading(true);
        const formData = new FormData(e.target);

        const name = formData.get("name");
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const res = await apiRequest.post("/auth/register", {
                name,
                username,
                email,
                password,
            });

            navigate("/login");
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="register-form-container">
            <p className="title">Create Account</p>
            <form
                onSubmit={handleSubmit}
                className="form"
                onKeyDown={handleKeyPress}
            >
                <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder="Username"
                    required
                />

                <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    required
                />
                <button className="form-btn" disabled={isLoading}>
                    Create Account
                </button>
                {error && <span>{error}</span>}
            </form>
            <p className="sign-up-label">
                Already have an account?
                <Link to="/login" className="sign-up-link">
                    Sign in
                </Link>
            </p>
            <div className="buttons-container">
                <div
                    className="google-login-button"
                    onClick={handleGoogleLogin}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        x="0px"
                        y="0px"
                        className="google-icon"
                        viewBox="0 0 48 48"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                    </svg>
                    <span>Sign up with Google</span>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
