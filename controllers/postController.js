const db = require('../models/index');
const Post = db.posts;


const addPost = async(req, res) => {
    const postInfo = {
        postContent: req.body.postContent,
        post_author_id: req.body.post_author_id
    };

    const post = await Post.create(postInfo);
    res.status(200).json({ message: 'Post created successfully!', post: post });
}

const getAllPosts = async(req, res) => {
    const posts = await Post.findAll({});
    res.status(200).json({ message: 'Post fetched successfully!', posts: posts });
}

const getOnePost = async(req, res) => {
    const post_id = req.params.id;
    const post = await Post.findOne({ where: {id: post_id} });
    res.status(200).json({ message: 'Post fetched successfully!', post: post });
}

const updatePost = async(req, res) => {
    const post_id = req.params.id;
    const post = await Post.update(req.body, { where: {id: post_id} });
    res.status(200).json({ message: 'Post updated successfully!', post: post });
}

const deletePost = async(req, res) => {
    const post_id = req.params.id;
    const post = await Post.destroy({ where: {id: post_id} });
    res.status(200).json({ message: 'Post deleted successfully!', post: post });
}


module.exports = {
    addPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost
}