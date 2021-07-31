const router = require("express").Router();
const {createMovie, getMoviesBySection, getRandomMovie, deleteMovie, getMovies } = require("../controllers/movies");
const verifyToken = require('../middlewares/token');

router.post("/", verifyToken, createMovie);
router.delete("/:id", verifyToken, deleteMovie);
router.get("/", verifyToken, getMovies);
router.get("/find/section/:section", verifyToken, getMoviesBySection);
router.get("/find/random", verifyToken, getRandomMovie);

module.exports = router;