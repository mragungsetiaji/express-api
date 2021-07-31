const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {   
        title: {type:String, required: true, unique: true},
        desc: {type:String, required: true},
        backgroundImageUrl: {type:String, required: true},
        posterImageUrl: {type:String, required: true},
        trailerUrl: {type:String, required: true},
        genre: {type:String, required: true},
        isSeries: {type:Boolean, required: true},
        year: {type:Number, required: true},
        section: {type:String, required: true},
    },
    {timestamps: true}
);

const collection = 'movies';
module.exports = mongoose.model('Movie', MovieSchema, collection);