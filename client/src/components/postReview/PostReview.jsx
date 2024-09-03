import { useState } from "react";
import "./postReview.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";

const PostReview = ({ postId }) => {
    const navigate = useNavigate();

    const [review, setReview] = useState({
        name: "",
        comment: "",
        rating: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleRatingChange = (newRating) => {
        setReview((prevReview) => ({
            ...prevReview,
            rating: newRating,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = {
            ...review,
            rating: parseInt(review.rating),
        };
        try {
            const response = await apiRequest.post(
                `/posts/${postId}/review`,
                reviewData
            );
            if (response.status === 201) {
                setReview({
                    name: "",
                    comment: "",
                    rating: "",
                });
                navigate(`/${postId}`);
                Swal.fire({
                    icon: "success",
                    title: "Post added successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            // Handle error (e.g., show error message)
            console.error("Failed to post review:", error);
        }
    };

    return (
        <form className="postReview" onSubmit={handleSubmit}>
            <div className="item">
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={review.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="item">
                <label htmlFor="">Comment</label>
                <textarea
                    rows={4}
                    type="text"
                    id="comment"
                    name="comment"
                    value={review.comment}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="item">
                <label htmlFor="">Rating</label>
                {/* <input
                    type="number"
                    min={1}
                    max={5}
                    id="rating"
                    name="rating"
                    placeholder="Rating (E.g. 1-5)"
                    value={review.rating}
                    onChange={handleChange}
                    required
                /> */}
                <ReactStars
                    count={5}
                    onChange={handleRatingChange}
                    size={24}
                    activeColor="#ffd700"
                    value={review.rating}
                />

                <button>
                    <img src="/write.png" alt="" />
                </button>
            </div>
        </form>
    );
};

export default PostReview;
