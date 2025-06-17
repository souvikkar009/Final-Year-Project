const expressAsyncHandler = require("express-async-handler");
const Organization = require("../models/organization.model");
const { generateDataAccessKey } = require("../utils/generateOrganizationKeys");

/*
@desc create access key to get data
@route POST api/organization/create-access-key
@access Private
*/
const createAccessKey = expressAsyncHandler(async (req, res) => {
    const { accessing_data } = req.body;

    const { userId } = req.authData;

    const generated_access_key = generateDataAccessKey();

    const organization = await Organization.findByIdAndUpdate(userId, {
        $set: {
            [`access_keys.${generated_access_key}`]: accessing_data,
        },
    });

    res.json({
        message: "Data Access Key Generated",
        success: true,
        access_key: generated_access_key,
    });
});

/*
@desc Get Organization Information
@route GET api/organization
@access Private
*/
const getOrganizationInfo = expressAsyncHandler(async (req, res) => {
    const { userId } = req.authData;

    const organization = await Organization.findById({ _id: userId }).select(
        "org_id organization_name email access_keys -_id"
    );

    res.json(organization);
});

module.exports = { createAccessKey, getOrganizationInfo };
