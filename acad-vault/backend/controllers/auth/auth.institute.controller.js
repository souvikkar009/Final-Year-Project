const Institute = require("../../models/institute.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");

/*
@desc register an institute
@route POST api/auth/institute/register
@access public
*/
const registerInstitute = expressAsyncHandler(async (req, res) => {
    // extracting data by destructuring request body
    const {
        institute_id,
        institute_name,
        password,
        institute_level,
        program_levels,
        program_names,
        institute_type,
    } = req.body;

    // check if all the fields are present for institute registration
    if (
        !password ||
        !institute_id ||
        !institute_name ||
        !institute_level ||
        !institute_type ||
        !program_names ||
        !program_levels
    ) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    // for later work if the institute level is higher_studies then program_levels and program_names are mandatory

    // check if the institute is already exist in database
    const existingInstitute = await Institute.findById({ _id: institute_id });

    // if the institute exist, throw error and stop registration
    if (existingInstitute) {
        res.status(400);
        throw new Error("Institute already exists");
    }

    // hash the password before storing in database
    const hashed_password = await bcrypt.hash(password, 10);

    // Institute data is being stored in database
    const institute = await Institute.create({
        _id: institute_id,
        institute_name,
        institute_id,
        password: hashed_password,
        program_levels,
        institute_level,
        institute_type,
        program_names,
    });

    // check if the transaction successful
    if (!institute) {
        res.status(500);
        throw new Error("Institute Registration Failed");
    }

    console.log(institute);

    // If registration process done, create a JWT token
    const token = jwt.sign(
        { userId: institute_id, userRole: institute.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1d",
        }
    );

    // Store the token in the cookie
    res.status(201)
        .cookie("authcookie", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })
        .json({
            message: "Institute Registration Successful",
        });
});

/*
@desc Login an institute
@route POST /api/auth/institute/login
@access Public
*/
const loginInstitute = expressAsyncHandler(async (req, res) => {
    // extracting data by destructuring request body
    const { institute_id, password } = req.body;

    // check if all the fields are present for student log in
    if (!institute_id || !password) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    // check if the institute is registered or not
    const institute = await Institute.findById({ _id: institute_id });

    // if the student is not registered then throw error
    if (!institute) {
        res.status(401);
        throw new Error("Institute Is Not Registered");
    }

    // check if the password matches
    const isPasswordMatched = await bcrypt.compare(
        password,
        institute.password
    );

    // if the password don't match, throw invalid credential error
    if (!isPasswordMatched) {
        res.status(401);
        throw new Error("Invalid Credentials");
    }

    // after all the validation, generate an authorization token
    const token = jwt.sign(
        { userId: institute_id, userRole: institute.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
    );

    // Store the token in the cookie
    res.status(200)
        .cookie("authcookie", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })
        .json({ message: "Institute Logged In" });
});

module.exports = { registerInstitute, loginInstitute };
