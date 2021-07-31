const Movie = require('../models/Movie');

module.exports.createMovie = async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(200).json(savedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
}

// get movie by section
module.exports.getMoviesBySection = async (req, res) => {
    try {
        const movies = await Movie.find({ section: req.params.section });
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
}

// get random one movie with section == netflix
module.exports.getRandomMovie = async (req, res) => {
    try {
        const movie = await Movie.aggregate([
            { $match :{ section: "netflix" }}, 
            { $sample: { size: 1 }},
        ]);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
}

// delete movies by id
module.exports.deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({
            "message":"The movie has been deleted...",
            "id": req.params.id
        });
      } catch (err) {
        res.status(500).json(err);
      }
}

// get all movies
module.exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch (err) {
        res.status(500).json(err);
    }
}