import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import "./styles.css";

const ReviewCard = ({ reviews }) => {
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
                modules={[Navigation, Pagination]}
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
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

export default ReviewCard;