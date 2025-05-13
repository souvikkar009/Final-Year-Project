const express = require("express");
const { validateToken } = require("../middlewares/validateToken");
const { createAccessKey } = require("../controllers/organization.controller");

const router = express.Router();

// Create a access key to access data
router.post("/create-access-key", validateToken, createAccessKey);

module.exports = router;
