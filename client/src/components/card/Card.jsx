import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./card.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import Swal from "sweetalert2";

const Card = ({ item, showDeleteButton }) => {
    const [saved, setSaved] = useState(item.isSaved);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSave = async () => {
        if (!currentUser) {
            navigate("/login");
            return;
        }
        setSaved((prev) => !prev); // Optimistic UI update

        try {
            await apiRequest.post("/users/save", { postId: item.id });
        } catch (err) {
            console.error(err);
            setSaved((prev) => !prev); // Revert on failure
        }
    };

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Do you really want to delete the post "${item.title}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        });

        if (!result.isConfirmed) return;

        try {
            await apiRequest.delete(`/posts/${item.id}`);
            navigate("/profile");
            Swal.fire({
                icon: "success",
                title: "Post deleted successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.log(error);
        }
    };

    return (
        <div className="card">
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.images[0]} alt="" />
            </Link>
            <div className="textContainer">
                {/* <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2> */}

                {/* ============== New =============== */}
                <div className="heading">
                    <h2 className="title">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                    </h2>
                    <div className="deletebtn" onClick={handleDelete}>
                        {showDeleteButton && (
                            <div
                                className="deleteicon"
                                onClick={() => handleDelete(item.id)}
                            >
                                <img src="/delete.png" alt="Delete" />
                            </div>
                        )}
                    </div>
                </div>
                {/* ============== New =============== */}

                <p className="address">
                    <img src="/pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <p className="price">$ {item.price} /hr</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/service.png" alt="" />
                            <span>{item.serviceType}</span>
                        </div>
                        <div className="call">
                            <a href={`tel:${item.phone}`}>
                                <img src="/call.png" alt="" />
                                <span> Call {item.phone}</span>
                            </a>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon" onClick={handleSave}>
                            {/* <img src="/unsaved.png" alt="" /> */}
                            <img
                                src={saved ? "/saved.png" : "/unsaved.png"}
                                alt=""
                            />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
