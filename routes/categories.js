const router = require('express').Router();
const { postCategory, getCategory } = require('../controllers/categories');
const verifyToken = require('../middlewares/token');

router.post("/", verifyToken, postCategory);
router.get("/", verifyToken, getCategory);

module.exports = router;