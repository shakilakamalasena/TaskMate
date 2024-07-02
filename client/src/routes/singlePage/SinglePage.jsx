import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import Map from "../../components/map/Map";
import PostReview from "../../components/postReview/PostReview";

const SinglePage = () => {
    const averageRating =
        singlePostData.reviews.reduce(
            (total, review) => total + review.rating,
            0
        ) / singlePostData.reviews.length;

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>

                                <div className="price">
                                    $ {singlePostData.price} /hr
                                </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                        <div className="reviews">
                            <hr />
                            <h1>Reviews</h1>
                            <div className="review">
                                <ReviewCard reviews={singlePostData.reviews} />
                            </div>
                            <br /><br />
                            <hr />
                            <h1>Post a Review?</h1>
                            <div className="review">
                                {/* <ReviewCard reviews={singlePostData.reviews} /> */}
                                <PostReview />
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
                                <p>{singlePostData.serviceType}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/available.png" alt="" />
                            <div className="featureText">
                                <span>Availability</span>
                                <p>{singlePostData.availability}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pay.png" alt="" />
                            <div className="featureText">
                                <span>Advance</span>
                                <p>{singlePostData.advance}</p>
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
                                <a href={`tel:${singlePostData.phone}`}>
                                    {/* Click Here &rarr; */}
                                    {singlePostData.phone}
                                </a>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/email.png" alt="" />
                            <div className="featureText">
                                <span>Email</span>
                                <a href={`mailto:${singlePostData.email}`}>
                                    {/* Click Here &rarr; */}
                                    {singlePostData.email}
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save this Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
