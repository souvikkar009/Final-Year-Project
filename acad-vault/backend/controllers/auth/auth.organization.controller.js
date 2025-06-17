const Organization = require("../../models/organization.model");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
    generateOrganizationId,
    generateOrganizationSecretKey,
} = require("../../utils/generateOrganizationKeys");
const expressAsyncHandler = require("express-async-handler");

/*
@desc register an organization
@route POST api/auth/organization/register
@access public
*/
const registerOrganization = expressAsyncHandler(async (req, res) => {
    // extracting data by destructuring request body
    const { organization_name, email, password } = req.body;

    // check if all the fields are present for institute registration
    if (!organization_name || !email || !password) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    // check if the organization is already exist in database
    const existingOrganization = await Organization.findOne({ email });

    // if the organization exist, throw error and stop registration
    if (existingOrganization) {
        res.status(400);
        throw new Error("Organization already exists");
    }

    // Give organization a id
    const _id = generateOrganizationId();

    // hash the password before storing in database
    const hashed_password = await bcrypt.hash(password, 10);

    // create a secret key for the organization
    const generated_secret_key = generateOrganizationSecretKey();

    // hashing the secret key before storing in database
    const hashed_secret_key = await bcrypt.hash(generated_secret_key, 10);

    // Institute data is being stored in database
    const organization = await Organization.create({
        _id,
        organization_name,
        org_id: _id,
        email,
        password: hashed_password,
        secret_key: hashed_secret_key,
    });

    // check if the transaction successful
    if (!organization) {
        res.status(500);
        throw new Error("Organization Registration Failed");
    }

    console.log(organization);

    // If registration process done, create a JWT token
    const token = jwt.sign(
        { userId: _id, userRole: organization.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
    );

    // Store the token in the cookie
    res.status(201)
        .cookie("authcookie", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })
        .json({
            message: "Organization Registration Successful",
            success: true,
            secret_key: generated_secret_key,
            org_id: _id,
        });
});

/*
@desc Login an Organization
@route POST /api/auth/organization/login
@access Public
*/
const loginOrganization = expressAsyncHandler(async (req, res) => {
    // extracting data by destructuring request body
    const { email, password } = req.body;

    // check if all the fields are present for student log in
    if (!email || !password) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    // check if the organization is registered or not
    const organization = await Organization.findOne({ email });

    // if the student is not registered then throw error
    if (!organization) {
        res.status(401);
        throw new Error("Organization Is Not Registered");
    }

    // check if the password matches
    const isPasswordMatched = bcrypt.compare(password, organization.password);

    // if the password don't match, throw invalid credential error
    if (!isPasswordMatched) {
        res.status(401);
        throw new Error("Invalid Credentials");
    }

    // after all the validation, generate an authorization token
    const token = jwt.sign(
        { userId: organization._id, userRole: organization.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1d",
        }
    );

    // Store the token in the cookie
    res.status(200)
        .cookie("authcookie", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })
        .json({ message: "Organization Logged In" });
});

module.exports = { registerOrganization, loginOrganization };
