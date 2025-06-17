const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Organization = require("../models/organization.model");

const validateDataAccess = asyncHandler(async (req, res, next) => {
    // Get the access key from url
    const org_id = req.query.org_id;
    const access_key_val = req.query.access_key;

    // Get the secret key from header
    const secret_key_value = req.headers["secret-key"];

    if (!secret_key_value) {
        res.status(401).render("failure");
        return;
    }

    const organization = await Organization.findById({
        _id: org_id,
    }).select("_id access_keys secret_key");

    if (!organization) {
        res.status(401).render("failure");
        return;
    }
    const { access_keys, secret_key } = organization;

    // check if the secret key value matches
    const isSecretKeyMatched = bcrypt.compare(secret_key_value, secret_key);

    // if the secret key don't match, throw invalid credential error
    if (!isSecretKeyMatched) {
        res.status(401).render("failure");
        return;
    }

    const accessing_data = access_keys.get(access_key_val);

    if (!accessing_data || accessing_data.size <= 0) {
        res.status(401).render("failure");
        return;
    }
    next();
});

module.exports = validateDataAccess;
