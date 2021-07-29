const router = require('express').Router();
const { postCategory, getCategory } = require('../controllers/categories');

router.post("/", postCategory);
router.get("/", getCategory);

module.exports = router;