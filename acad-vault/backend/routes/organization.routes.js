const express = require("express");
const {
    registerOrganization,
    loginOrganization,
} = require("../controllers/auth/auth.organization.controller");
const { validateOrganizationToken } = require("../middlewares/validateToken");
const { createAccessKey } = require("../controllers/organization.controller");

const router = express.Router();

// Create a access key to access data
router.post("/create-access-key", validateOrganizationToken, createAccessKey);

module.exports = router;
