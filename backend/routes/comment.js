const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

// comments
router.get("/", auth, commentCtrl.getAllComment);
router.post("/", auth, commentCtrl.createComment);
router.delete("/:id", auth, commentCtrl.deleteComment);

module.exports = router;