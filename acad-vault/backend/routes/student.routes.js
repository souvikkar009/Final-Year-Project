const express = require("express");
const { getStudentInfo } = require("../controllers/student.controller");
const {
    validateToken,
    validateStundetToken,
    validateTokenForInfo,
    validateTokenForAll,
} = require("../middlewares/validateToken");

const router = express.Router();

router.get("/", validateTokenForAll, getStudentInfo);

module.exports = router;
