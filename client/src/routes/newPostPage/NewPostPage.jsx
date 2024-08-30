import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewPostPage = () => {
    const [value, setValue] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputs = Object.fromEntries(formData);

        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you really want to add the post?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, post it!",
                cancelButtonText: "No",
            });

            if (!result.isConfirmed) return;

            const res = await apiRequest.post("/posts", {
                postData: {
                    title: inputs.title,
                    price: parseInt(inputs.price),
                    address: inputs.address,
                    serviceType: inputs.serviceType,
                    city: inputs.city,
                    phone: inputs.phone,
                    latitude: inputs.latitude,
                    longitude: inputs.longitude,
                    images: images,
                },
                postDetail: {
                    desc: value,
                    email: inputs.email,
                    availability: inputs.availability,
                    advance: inputs.advance,
                },
            });

            navigate("/" + res.data.id);

            Swal.fire({
                icon: "success",
                title: "Post added successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            console.log(err);
            setError(error);
        }
    };

    return (
        <div className="newPostPage">
            <div className="formContainer">
                <h1>Add New Post</h1>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="serviceType">Service Type</label>
                            <select name="serviceType">
                                <option value="">any</option>
                                <option value="Carpentry">Carpentry</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Painting">Painting</option>
                                <option value="Gardening">Gardening</option>
                                <option value="Cleaning">Cleaning</option>
                                <option value="Handyman">Handyman</option>
                                <option value="HVAC">HVAC</option>
                                <option value="Locksmith">Locksmith</option>
                                <option value="Renovation">Renovation</option>
                                <option value="Roofing">Roofing</option>
                                <option value="Landscaping">Landscaping</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                min={1}
                            />
                        </div>
                        <div className="item description">
                            <label htmlFor="desc">Description</label>
                            <ReactQuill
                                theme="snow"
                                onChange={setValue}
                                value={value}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="address">Address</label>
                            <input id="address" name="address" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" name="phone" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" name="email" type="email" />
                        </div>
                        <div className="item">
                            <label htmlFor="latitude">Latitude</label>
                            <input id="latitude" name="latitude" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                id="longitude"
                                name="longitude"
                                type="text"
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="availability">Availability</label>
                            <input
                                id="availability"
                                name="availability"
                                type="text"
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="advance">Advance</label>
                            <input id="advance" name="advance" type="text" />
                        </div>
                        <button className="sendButton">Add Post</button>
                        {error && <span>error</span>}
                    </form>
                </div>
            </div>
            <div className="sideContainer">
                {images.map((image, index) => (
                    <img src={image} key={index} alt="" />
                ))}
                <UploadWidget
                    uwConfig={{
                        multiple: true,
                        cloudName: "doinkcozyy",
                        uploadPreset: "taskmate",
                        folder: "posts",
                    }}
                    setState={setImages}
                />
            </div>
        </div>
    );
};

export default NewPostPage;
