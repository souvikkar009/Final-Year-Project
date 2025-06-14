const express = require("express");

const {
    registerStudentsInHigherStudy,
    uploadSecondaryAcademicsData,
    uploadHigherSecondaryAcademicsData,
    getInstituteInfo,
} = require("../controllers/institute.controller");

const { validateToken } = require("../middlewares/validateToken");

const upload = require("../helper/multerStorage");

const router = express.Router();

// Student Secondary Academics Data Upload Using File
router.post(
    "/secondary/upload/academic-data",
    validateToken,
    upload.single("file"),
    uploadSecondaryAcademicsData
);
// Student Higher Secondary Academics Data Upload Using File
router.post(
    "/higher-secondary/upload/academic-data",
    validateToken,
    upload.single("file"),
    uploadHigherSecondaryAcademicsData
);

// Register student in higher studies
router.post(
    "/higher-studies/register",
    validateToken,
    registerStudentsInHigherStudy
);

router.get("/", validateToken, getInstituteInfo);

module.exports = router;
