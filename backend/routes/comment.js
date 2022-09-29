const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
//const auth = require("../middleware/auth");

// comments
router.patch("/comment-create/:id", commentCtrl.createComment);
router.patch("/comment-get/:id", commentCtrl.getAllComment);
router.patch("/comment-delete/:id", commentCtrl.deleteComment);

module.exports = router;