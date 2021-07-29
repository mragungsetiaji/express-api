const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
},
{timestamps: true});

const collection = "blogPosts";
module.exports = mongoose.model("Post", PostSchema, collection);