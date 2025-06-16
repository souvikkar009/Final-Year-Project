const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  getLoggedInAdmin,
  logoutAdmin,
} = require("../controllers/admin.controller");
const validateToken = require("../middlewares/validateToken");

const router = express.Router();

// Admin register and log in routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

router.get("/auth", validateToken, getLoggedInAdmin);
router.get("/logout", validateToken, logoutAdmin);
module.exports = router;
