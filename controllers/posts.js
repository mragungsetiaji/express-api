const Post = require("../models/Post");

module.exports.getPosts = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;

    try {
        let posts
        if (username) {
            posts = await Post.find({ username })
        } else if (catName) {
            posts = await Post.find({ 
                categories: {
                    $in : [catName]
                },
             });
        } else {
            posts = await Post.find({});
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username == req.body.username){
            try {
                await post.delete();
                res.status(200).json("post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("you are not the owner of this post");
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}