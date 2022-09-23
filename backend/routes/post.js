const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// posts
router.get("/", auth, postCtrl.getAllPost);
router.post("/", auth, multer, postCtrl.createPost);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.post("/:id/like", auth, postCtrl.createLike);

// comments
router.patch("/comment/:id", postCtrl.createComment);
router.patch("/comment/:id", postCtrl.getAllComment);
router.patch("/delete-comment/:id", postCtrl.deleteComment);

module.exports = router;
