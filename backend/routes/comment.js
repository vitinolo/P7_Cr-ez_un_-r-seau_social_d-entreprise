const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/",auth, commentCtrl.getAllComment);
router.post("/", auth, multer, commentCtrl.createComment);
router.get("/:id", auth, commentCtrl.getOneComment);
router.put("/:id", auth, multer, commentCtrl.modifyComment);
router.delete("/:id", auth, commentCtrl.deleteComment);
router.post("/:id/like", auth, commentCtrl.createLike);
module.exports = router;