const express = require("express");
const validateDataAccess = require("../middlewares/validateDataAccess");
const {
    provideValidationResult,
    provideDataSharingForm,
    shareData,
} = require("../controllers/share.controller");

const router = express.Router();

router.get("/", validateDataAccess, provideValidationResult);
router.get("/form_page", provideDataSharingForm);
router.post("/", shareData);

module.exports = router;
