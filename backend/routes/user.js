const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const password = require("../middleware/password");
const auth = require("../middleware/auth");

router.post("/signup",password, userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/", auth, userCtrl.getAllUser);
router.get("/:id", auth, userCtrl.getOneUser);

module.exports = router;
