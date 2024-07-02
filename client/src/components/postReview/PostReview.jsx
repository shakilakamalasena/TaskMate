import "./postReview.scss";

const PostReview = () => {
    return (
        <div className="postReview">
            <div className="item">
                <label htmlFor="city">Comment</label>
                <textarea
                    rows={4}
                    type="text"
                    id="comment"
                    name="comment"
                />
            </div>
            <div className="item">
                <label htmlFor="city">Rating</label>
                <input
                    type="number"
                    min={1}
                    max={5}
                    id="rating"
                    name="rating"
                    placeholder="Rating (E.g. 1-5)"
                />
                <button>
                    <img src="/write.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default PostReview;
