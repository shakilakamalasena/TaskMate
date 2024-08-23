import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

// Custom red icon
const redIcon = new L.Icon({
    iconUrl: "../../../public/red-pin.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
});

const Map = ({ items }) => {
    const [position, setPosition] = useState({
        clatitude: 7.289386960893119, // Default latitude
        clongitude: 80.63026529165514, // Default longitude
    });
    const [positionLoaded, setPositionLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    if (isMounted) {
                        setPosition({
                            clatitude: pos.coords.latitude,
                            clongitude: pos.coords.longitude,
                        });
                        setPositionLoaded(true);
                    }
                },
                (error) => {
                    console.error("Error getting geolocation: ", error);
                }
            );
        } else {
            console.log("Geolocation is not available in your browser.");
        }

        return () => {
            isMounted = false;
        };
    }, []);

    if (!positionLoaded) {
        return <div className="maploader"><Loader /></div>;
    }

    return (
        <div className="map">
            <MapContainer
                center={[position.clatitude, position.clongitude]}
                // center={
                //     items.length === 1
                //         ? [items[0].latitude, items[0].longitude]
                //         : [7.289386960893119, 80.63026529165514]
                // }
                zoom={12}
                scrollWheelZoom={true}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {items.map((item) => (
                    <Pin item={item} key={item.id} />
                ))}
                <Marker
                    position={[position.clatitude, position.clongitude]}
                    icon={redIcon}
                >
                    <Popup>You are here!</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
