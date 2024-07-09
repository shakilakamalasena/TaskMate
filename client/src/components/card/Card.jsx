import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./card.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

const Card = ({ item }) => {
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

    return (
        <div className="card">
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.images[0]} alt="" />
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
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
