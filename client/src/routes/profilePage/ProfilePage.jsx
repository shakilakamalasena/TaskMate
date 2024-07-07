import apiRequest from "../../lib/apiRequest";
import List from "../../components/list/List";
import "./profilePage.scss";
import ComingSoon from "../../components/comingSoon/ComingSoon";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
    const data = useLoaderData();

    const { updateUser, currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    // FILTER THE POSTS ADDED BY CURRENT USER
    const userPosts = data.postResponse.postPromise.data.userPosts.filter(
        (post) => post.userId === currentUser.id
    );

    const savedByUserIds = data.postResponse.savedPostsPromise.data;

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
                        <Link to="/profile/update">
                            <button>Update Profile</button>
                        </Link>
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
                        <Link to="/add">
                            <button>Create New Post</button>
                        </Link>
                    </div>

                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            // resolve={data.postResponse}
                            resolve={userPosts}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(userPosts) => <List posts={userPosts} />}
                        </Await>
                    </Suspense>

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={savedByUserIds}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(savedByUserIds) => (
                                <List posts={savedByUserIds} />
                            )}
                        </Await>
                    </Suspense>
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
