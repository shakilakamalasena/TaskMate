import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link><br />
                        <span>Call {item.phone}</span><br />
                        <b>$ {item.price}/hr</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
};

export default Pin;
