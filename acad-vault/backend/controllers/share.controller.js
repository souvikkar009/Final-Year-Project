const expressAsyncHandler = require("express-async-handler");
const Student = require("../models/student.model");
const getAccessingData = require("../utils/getAccessingData");
const Organization = require("../models/organization.model");
const bcrypt = require("bcrypt");
const axios = require("axios");

/*
@desc validate data sharing
@route GET api/share
@access Private
*/
const provideValidationResult = expressAsyncHandler(async (req, res) => {
    const { redirect_uri, org_id, access_key, frontend_redirect_uri } =
        req.query;
    res.status(200).json({
        message: "OK",
        success: true,
        form_page: `http://localhost:3030/api/share/form_page?org_id=${org_id}&access_key=${access_key}&redirect_uri=${redirect_uri}&frontend_redirect_uri=${frontend_redirect_uri}`,
    });
});

/*
@desc provide form
@route GET api/share/form
@access Public
*/

const provideDataSharingForm = expressAsyncHandler(async (req, res) => {
    const { redirect_uri, org_id, access_key, frontend_redirect_uri } =
        req.query;

    const { access_keys } = await Organization.findById(org_id).select(
        "access_keys"
    );
    const accessing_data = access_keys.get(access_key);

    // console.log(accessing_data);

    res.render("share-form", {
        redirect_uri,
        org_id,
        accessing_data: JSON.stringify(accessing_data),
        frontend_redirect_uri,
    });
});

/*
@desc share data
@route POST api/share
@access Public
*/

const shareData = expressAsyncHandler(async (req, res) => {
    const {
        redirect_uri,
        accessing_data,
        avid,
        password,
        frontend_redirect_uri,
    } = req.body;
    const student = await Student.findById(avid);

    // check if the password matches
    const isPasswordMatched = bcrypt.compare(password, student.password);

    // if the password don't match, throw invalid credential error
    if (!isPasswordMatched) {
        res.status(401);
        throw new Error("Invalid Credentials");
    }

    const studentData = getAccessingData(student, JSON.parse(accessing_data));
    // console.log(studentData);

    await axios.post(redirect_uri, {
        studentData,
    });

    const studentDataStr = JSON.stringify(studentData).replace(/</g, "\\u003c");

    res.render("success", {
        frontendRedirect: frontend_redirect_uri,
        studentDataStr,
    });
});

module.exports = { provideValidationResult, provideDataSharingForm, shareData };
