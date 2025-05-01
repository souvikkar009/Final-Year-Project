const express = require("express");
const {
    registerStudent,
    loginStundent,
} = require("../controllers/auth/auth.student.controller");

const {
    registerInstitute,
    loginInstitute,
} = require("../controllers/auth/auth.institute.controller");
const {
    registerOrganization,
    loginOrganization,
} = require("../controllers/auth/auth.organization.controller");
const {
    validateStundetToken,
    validateToken,
} = require("../middlewares/validateToken");
const authorizeRoles = require("../middlewares/authorizeRoles");
const loggedInUserInfo = require("../controllers/auth/auth.who.controller");

const router = express.Router();

// student register and log in routes
router.post("/student/register", registerStudent);
router.post("/student/login", loginStundent);

// institute register and log in routes

router.post("/institute/register", registerInstitute);
router.post("/institute/login", loginInstitute);

// organization register and log in routes

router.post("/organization/register", registerOrganization);
router.post("/organization/login", loginOrganization);

// get logged in user info

router.get(
    "/who",
    validateToken,
    authorizeRoles("student", "institute", "organization"),
    loggedInUserInfo
);

module.exports = router;
