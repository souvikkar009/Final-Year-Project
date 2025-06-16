const asyncHandler = require("express-async-handler");
const generateNextIdByState = require("../../utils/generateNextAvId");
const bcrypt = require("bcrypt");
const Student = require("../../models/student.model");
const jwt = require("jsonwebtoken");

/*
@desc Register an user
@route POST /api/auth/student/register
@access Public
*/
const registerStudent = asyncHandler(async (req, res) => {
    // extracting data by destructuring request body
    const {
        full_name,
        dob,
        state,
        district,
        pin_code,
        address,
        gender,
        mobile_no,
        aadhar_no,
        email,
        password,
    } = req.body;

    // check if all the fields are present for student registration
    if (
        !full_name ||
        !dob ||
        !state ||
        !district ||
        !pin_code ||
        !address ||
        !gender ||
        !mobile_no ||
        !aadhar_no ||
        !email ||
        !password
    ) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    // check if the student is already exist in database
    const existingStudent = await Student.findOne({ mobile_no });

    // if the student exist, throw error and stop registration
    if (existingStudent) {
        res.status(400);
        throw new Error("Student already exists");
    }

    // hash the password before storing in database
    const hashed_password = await bcrypt.hash(password, 10);

    // generate a avid based the state he/she belong
    const avid = await generateNextIdByState(state);

    // Student data is being stored in database
    const student = await Student.create({
        full_name,
        dob,
        state,
        district,
        pin_code,
        gender,
        address,
        mobile_no,
        aadhar_no,
        email,
        password: hashed_password,
        avid,
        _id: avid,
    });
    // check if the transaction successful
    if (!student) {
        res.status(500);
        throw new Error("Studnet Registration Failed");
    }

    console.log(student);

    // If registration process done, create a JWT token
    const token = jwt.sign(
        { userId: avid, userRole: student.role },
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
            message: "Student Registration Successful",
            success: true,
        });
});

/*
@desc Login an user
@route POST /api/auth/student/login
@access Public
*/
const loginStundent = asyncHandler(async (req, res) => {
    // extracting data by destructuring request body
    const { avid, password } = req.body;

    // check if all the fields are present for student log in
    if (!avid || !password) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    // check if the student is registered or not
    const student = await Student.findById(avid);

    // if the student is not registered then throw error
    if (!student) {
        res.status(401);
        throw new Error("Student Is Not Registered");
    }

    // check if the password matches
    const isPasswordMatched = bcrypt.compare(password, student.password);

    // if the password don't match, throw invalid credential error
    if (!isPasswordMatched) {
        res.status(401);
        throw new Error("Invalid Credentials");
    }

    // after all the validation, generate an authorization token
    const token = jwt.sign(
        { userId: avid, userRole: student.role },
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
        .json({ message: "User Logged In", success: true });
});

module.exports = { registerStudent, loginStundent };
