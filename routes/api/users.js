const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers");

const { validateUserBody, authenticate, upload } = require("../../middlewares");
const {
  registrationSchema,
  loginSchema,
  emailSchema,
} = require("../../schemas/users");

// signup
router.post("/register", validateUserBody(registrationSchema), registerUser);

router.get("/verify:verificationToken", verifyEmail);

router.post("/verify", validateUserBody(emailSchema), resendVerifyEmail);
// signin
router.post("/login", validateUserBody(loginSchema), loginUser);

// get current
router.get("/current", authenticate, getCurrentUser);

// logout
router.post("/logout", authenticate, logoutUser);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
