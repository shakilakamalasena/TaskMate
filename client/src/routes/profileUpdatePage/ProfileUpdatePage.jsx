import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [avatar, setAvatar] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const { name, username, email, password } =
            Object.fromEntries(formData);

        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`, {
                name,
                username,
                email,
                password,
                avatar: avatar[0],
            });
            updateUser(res.data);

            navigate("/profile");
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        }
    };

    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <div className="wrapper">
                    <div className="update-form-container">
                        <p className="title">Update Account</p>
                        <form onSubmit={handleSubmit} className="form">
                            <input
                                type="text"
                                className="input"
                                name="name"
                                placeholder="Name"
                                defaultValue={currentUser.name}
                            />
                            <input
                                type="text"
                                className="input"
                                name="username"
                                placeholder="Username"
                                defaultValue={currentUser.username}
                            />
                            <input
                                type="email"
                                className="input"
                                name="email"
                                placeholder="Email"
                                defaultValue={currentUser.email}
                            />
                            <input
                                type="password"
                                className="input"
                                name="password"
                                placeholder="Password"
                            />
                            <button className="form-btn">Update Account</button>
                            {error && <span>error</span>}
                        </form>
                    </div>
                </div>
            </div>
            <div className="sideContainer">
                <img
                    src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
                    alt=""
                    className="avatar"
                />
                <UploadWidget
                    uwConfig={{
                        cloudName: "doinkcozyy",
                        uploadPreset: "taskmate",
                        multiple: false,
                        maxImageFileSize: 2000000,
                        folder: "avatars",
                    }}
                    setState={setAvatar}
                />
            </div>
        </div>
    );
};

export default ProfileUpdatePage;