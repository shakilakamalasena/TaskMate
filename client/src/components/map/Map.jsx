import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
    // const [position, setPosition] = useState({
    //     clatitude: 51.505, // Default latitude
    //     clongitude: -0.09, // Default longitude
    // });
    // const [positionLoaded, setPositionLoaded] = useState(false);

    // useEffect(() => {
    //     let isMounted = true;

    //     if ("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition(
    //             (pos) => {
    //                 if (isMounted) {
    //                     setPosition({
    //                         clatitude: pos.coords.latitude,
    //                         clongitude: pos.coords.longitude,
    //                     });
    //                     setPositionLoaded(true);
    //                 }
    //             },
    //             (error) => {
    //                 console.error("Error getting geolocation: ", error);
    //             }
    //         );
    //     } else {
    //         console.log("Geolocation is not available in your browser.");
    //     }

    //     return () => {
    //         isMounted = false;
    //     };
    // }, []);

    // if (!positionLoaded) {
    //     return <div>Loading map...</div>;
    // }

    return (
        <div className="map">
            <MapContainer
                // center={[position.clatitude, position.clongitude]}
                center={
                    items.length === 1
                        ? [items[0].latitude, items[0].longitude]
                        : [52.4797, -1.90269]
                }
                zoom={6}
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
            </MapContainer>
        </div>
    );
};

export default Map;
