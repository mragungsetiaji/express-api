const router = require("express").Router();
const { updateUser, deleteUser, getUser } = require("../controllers/users");
const verifyToken = require('../middlewares/token');

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
  
module.exports = router;