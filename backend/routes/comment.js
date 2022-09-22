const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/comments", auth, commentCtrl.getAllComment);
router.post("/comments", auth, multer, commentCtrl.createComment);
router.get("/comments/:id", auth, commentCtrl.getOneComment);
router.delete("/comments/:id", auth, commentCtrl.deleteComment);
module.exports = router;