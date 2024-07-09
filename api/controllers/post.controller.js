import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
    const query = req.query;
    try {
        const posts = await prisma.post.findMany({
            where: {
                serviceType: query.serviceType || undefined,
                city: query.city
                    ? {
                          contains: query.city,
                          mode: "insensitive",
                      }
                    : undefined,
                price: {
                    gte: parseInt(query.minPrice) || 0,
                    lte: parseInt(query.maxPrice) || 10000000,
                },
            },
        });

        // setTimeout(() => {
        res.status(200).json(posts);
        // }, 3000);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get posts" });
    }
};

export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        name: true,
                        avatar: true,
                    },
                },
            },
        });

        const token = req.cookies?.token;

        if (token) {
            jwt.verify(
                token,
                process.env.JWT_SECRET_KEY,
                async (err, payload) => {
                    if (!err) {
                        const saved = await prisma.savedPost.findUnique({
                            where: {
                                userId_postId: {
                                    postId: id,
                                    userId: payload.id,
                                },
                            },
                        });
                        res.status(200).json({
                            ...post,
                            isSaved: saved ? true : false,
                        });
                    }
                }
            );
        } else {
            return res.status(200).json({ ...post, isSaved: false });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get post" });
    }
};

export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;

    try {
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail: {
                    create: body.postDetail,
                },
            },
        });

        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create post" });
    }
};

export const updatePost = async (req, res) => {
    try {
        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update post" });
    }
};

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    try {
        const post = await prisma.post.findUnique({
            where: { id },
        });

        if (post.userId !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized!" });
        }

        await prisma.post.delete({
            where: { id },
        });

        res.status(200).json({ message: "Post deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete post" });
    }
};

export const getReviews = async (req, res) => {
    const postId = req.params.postId;
    try {
        const reviews = await prisma.review.findMany({
            where: { postId },
        });
        res.status(200).json(reviews);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get reviews" });
    }
};

export const addReview = async (req, res) => {
    const postId = req.params.postId;
    const { name, rating, comment } = req.body;

    try {
        const newReview = await prisma.review.create({
            data: {
                name,
                rating,
                comment,
                postId,
            },
        });
        res.status(201).json(newReview);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to add review" });
    }
};
