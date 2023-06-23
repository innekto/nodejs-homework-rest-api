const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../../controllers");
const { validateUserBody } = require("../../middlewares");
const { registrationSchema, loginSchema } = require("../../schemas/users");

// signup
router.post("/register", validateUserBody(registrationSchema), registerUser);

// signin
router.post("/login", validateUserBody(loginSchema), loginUser);

module.exports = router;
