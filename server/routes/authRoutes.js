const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/signup", upload.single("profile_image"), registerUser);

router.post("/login", loginUser);

module.exports = router;
