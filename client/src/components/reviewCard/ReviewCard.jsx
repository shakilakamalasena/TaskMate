import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./styles.css";
import apiRequest from "../../lib/apiRequest";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ postId }) => {
    const review = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await apiRequest.get(
                    `/posts/${postId}/reviews`
                );
                setReviews(response.data);
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            }
        };

        fetchReviews();
    }, [postId]);

    const generateStars = (rating) => {
        const filledStars = "★".repeat(rating);
        const emptyStars = "☆".repeat(5 - rating);
        return filledStars + emptyStars;
    };

    return (
        <>
            <Swiper
                loop={true}
                autoHeight={true}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews
                    .sort((a, b) => b.rating - a.rating)
                    .map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="top">
                                <div className="comment">{review.comment}</div>
                            </div>
                            <div className="bottom">
                                <span>- {review.name}</span>
                                <div className="rating">
                                    {generateStars(review.rating)}
                                    <ReactStars
                                        count={5}
                                        value={review.rating}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default ReviewCard;
