import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
    const postPromise = apiRequest("/posts/" + params.id);
    const reviewsPromise = apiRequest(`/posts/${params.id}/reviews`);

    // Wait for both promises to resolve
    const [postResponse, reviewsResponse] = await Promise.all([
        postPromise,
        reviewsPromise,
    ]);

    // Return an object containing both post details and reviews
    return {
        post: postResponse.data,
        reviews: reviewsResponse.data,
    };
};

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1];
    const postPromise = apiRequest("/posts/?" + query);
    return defer({
        postResponse: postPromise,
    });
};

export const profilePageLoader = async () => {
    const postPromise = await apiRequest("/users/profilePosts");
    const savedPostsPromise = await apiRequest("/users/savedPosts");

    return defer({
        postResponse: {
            postPromise: postPromise,
            savedPostsPromise: savedPostsPromise,
        },
    });
};
