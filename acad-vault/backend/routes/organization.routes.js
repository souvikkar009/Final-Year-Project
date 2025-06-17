const express = require("express");
const {
    validateTokenForAll,
    validateToken,
} = require("../middlewares/validateToken");
const {
    createAccessKey,
    getOrganizationInfo,
} = require("../controllers/organization.controller");

const router = express.Router();

// Create a access key to access data
router.post("/create-access-key", validateToken, createAccessKey);
router.get("/", validateToken, getOrganizationInfo);

module.exports = router;
