import apiRequest from "../../lib/apiRequest";
import List from "../../components/list/List";
import "./profilePage.scss";
import ComingSoon from "../../components/comingSoon/ComingSoon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
    const { updateUser, currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await apiRequest.post("/auth/logout");
            updateUser(null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img
                                src={currentUser.avatar || "noavatar.jpg"}
                                alt=""
                            />
                        </span>
                        <span>
                            Username: <b>{currentUser.username}</b>
                        </span>
                        <span>
                            E- mail: <b>{currentUser.email}</b>
                        </span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <span>Chat Option</span>
                    <ComingSoon />
                    <br />
                    <span>Coming Soon...</span>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
