const express = require("express");
const router = express.Router();
const profileCtrl = require("../controllers/profile");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/",  profileCtrl.getAllProfile);
router.post("/", auth, multer, profileCtrl.createProfile);
router.get("/:id", auth, profileCtrl.getOneProfile);
router.put("/:id", auth, multer, profileCtrl.modifyProfile);
router.delete("/:id", auth, profileCtrl.deleteProfile);
module.exports = router;