import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
    return (
        <div className="card">
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.img} alt="" />
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
                        <div className="icon">
                            <img src="/save.png" alt="" />
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
