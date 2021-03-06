// External imports
const express = require("express");
const router = express.Router();

// Internal Imports
const {
  requireSignIn,
  isAuth,
  isAdmin,
  permission,
} = require("../controllers/auth");
const { userById } = require("../controllers/user");

// Routes
router.get("/secret/:id", requireSignIn, isAuth, userById);

module.exports = router;
