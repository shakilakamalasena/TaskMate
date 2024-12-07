import "./login.scss";
import LoginForm from "../../components/loginForm/LoginForm";

const Login = () => {
    return (
        <div className="login">
            <div className="textContainer">
                <div className="wrapper">
                    <LoginForm />
                </div>
            </div>
            <div className="imageContainer">
                <img src="/logo.png" alt="" />
                <p>&copy; 2024 TASKMATE. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Login;
