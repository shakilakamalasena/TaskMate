import RegisterForm from "../../components/registerForm/RegisterForm";
import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="textContainer">
                <div className="wrapper">
                    <RegisterForm />
                </div>
            </div>
            <div className="imageContainer">
                <img src="/logo.png" alt="" />
                <p>&copy; 2024 TASKMATE. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Register;
