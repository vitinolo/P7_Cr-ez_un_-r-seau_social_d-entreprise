const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

// comments
router.get("/:postId", auth, commentCtrl.getAllComment);
router.post("/", auth, commentCtrl.createComment);
router.get("/:id", auth, commentCtrl.getOneComment);
router.delete("/:id", auth, commentCtrl.deleteComment);

module.exports = router;