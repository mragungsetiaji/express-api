const router = require("express").Router();
const { getPosts, getPost, deletePost, createPost } = require("../controllers/posts");

router.post("/", createPost);
router.delete("/:id", deletePost);
router.get("/", getPost);
router.get("/", getPosts);

module.exports = router;