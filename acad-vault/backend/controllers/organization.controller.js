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

    const { email } = req.authData;
    const generated_access_key = generateDataAccessKey();

    const organization = await Organization.findOneAndUpdate(
        { email },
        {
            $set: {
                [`access_keys.${generated_access_key}`]: accessing_data,
            },
        }
    );
    console.log(organization);

    console.log(generated_access_key);

    res.json({
        message: "Data Access Key Generated",
        success: true,
        access_key: generated_access_key,
    });
});

module.exports = { createAccessKey };
