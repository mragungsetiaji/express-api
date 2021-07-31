const router = require("express").Router();
const { getPosts, getPost, deletePost, createPost } = require("../controllers/posts");
const verifyToken = require('../middlewares/token');

router.post("/", verifyToken, createPost);
router.delete("/:id", verifyToken, deletePost);
router.get("/", verifyToken, getPost);
router.get("/", verifyToken, getPosts);

module.exports = router;