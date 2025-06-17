const express = require("express");
const getStudentData = require("../controllers/getdata.controller");

const router = express.Router();

router.post("/", getStudentData);

module.exports = router;
