const express = require("express");
const getStudentData = require("../controllers/getdata.controller");

const router = express.Router();

router.post("/getdata", getStudentData);

module.exports = router;
