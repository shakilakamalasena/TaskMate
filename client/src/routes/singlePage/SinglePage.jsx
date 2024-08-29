import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import PostReview from "../../components/postReview/PostReview";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SinglePage = () => {
    const all = useLoaderData();
    const post = all.post;
    const reviews = all.reviews;
    const [saved, setSaved] = useState(post.isSaved);
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSave = async () => {
        if (!currentUser) {
            navigate("/login");
        }
        // AFTER REACT 19 UPDATE TO USEOPTIMISTIC HOOK
        setSaved((prev) => !prev);

        try {
            await apiRequest.post("/users/save", { postId: post.id });
        } catch (err) {
            console.log(err);
            setSaved((prev) => !prev);
        }
    };

    const averageRating =
        reviews.reduce((total, review) => total + review.rating, 0) /
        reviews.length;

    // LATER ADDED
    const generateStars = (rating) => {
        const filledStars = "★".repeat(rating);
        const emptyStars = "☆".repeat(5 - rating);
        return filledStars + emptyStars;
    };

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={post.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{post.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{post.address}</span>
                                </div>

                                <div className="price">
                                    Rs. {post.price} /hr
                                </div>
                            </div>
                            <div className="user">
                                <img
                                    src={post.user.avatar || "/noavatar.jpg"}
                                    alt=""
                                />
                                <span>{post.user.name}</span>
                            </div>
                        </div>
                        <div
                            className="bottom"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    post.postDetail.desc
                                ),
                            }}
                        ></div>
                        <div className="reviews">
                            <hr />
                            <h1>Reviews</h1>
                            <div className="review">
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
                                                    <div className="comment">
                                                        {review.comment}
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <span>- {review.name}</span>
                                                    <div className="rating">
                                                        {generateStars(
                                                            review.rating
                                                        )}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </div>

                            <hr />
                            <h1>Post a Review?</h1>
                            <div className="review">
                                <PostReview postId={post.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/service.png" alt="" />
                            <div className="featureText">
                                <span>Service Type</span>
                                <p>{post.serviceType}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/available.png" alt="" />
                            <div className="featureText">
                                <span>Availability</span>
                                <p>{post.postDetail.availability}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pay.png" alt="" />
                            <div className="featureText">
                                <span>Advance</span>
                                <p>{post.postDetail.advance}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/review.png" alt="" />
                            <div className="featureText">
                                <span>Rating</span>
                                <p>{averageRating.toFixed(1)}/5</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Contact Me</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/call.png" alt="" />
                            <div className="featureText">
                                <span>Call</span>
                                <a href={`tel:${post.phone}`}>
                                    {/* Click Here &rarr; */}
                                    {post.phone}
                                </a>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/email.png" alt="" />
                            <div className="featureText">
                                <span>Email</span>
                                <a href={`mailto:${post.email}`}>
                                    {/* Click Here &rarr; */}
                                    {post.postDetail.email}
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[post]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button
                            onClick={handleSave}
                            style={{
                                backgroundColor: saved ? "#fece51" : "white",
                            }}
                        >
                            <img src="/save.png" alt="" />
                            {saved ? "Post Saved" : "Save this Post"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
