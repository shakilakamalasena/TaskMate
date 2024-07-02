import React from "react";
import "./postReview.scss";

const PostReview = () => {
    return (
        <div className="postReview">
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Comment</label>
                    <input
                        type="text"
                        id="comment"
                        name="comment"
                        placeholder="Comment"
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="city">Rating</label>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        id="rating"
                        name="rating"
                    />
                </div>
                <button>
                    <img src="/write.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default PostReview;
