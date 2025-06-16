const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");

/*
@desc Register an admin
@route POST /api/admin/register
@access Hidden
*/
const registerAdmin = asyncHandler(async (req, res) => {
  // extracting data by destructuring request body
  const { admin_name, admin_id, password } = req.body;

  // check if all the fields are present for student registration
  if (!admin_name || !admin_id || !password) {
    res.status(400);
    throw new Error("All Fields Are Required");
  }

  // check if the admin is already exist in database
  const existingAdmin = await Admin.findById(admin_id);

  // if the admin exist, throw error and stop registration
  if (existingAdmin) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  // hash the password before storing in database
  const hashed_password = await bcrypt.hash(password, 10);

  // Admin data is being stored in database
  const admin = await Admin.create({
    admin_id,
    admin_name,
    password: hashed_password,
    _id: admin_id,
  });
  // check if the transaction successful
  if (!admin) {
    res.status(500);
    throw new Error("Admin Registration Failed");
  }

  console.log(admin);

  // Store the token in the cookie
  res.status(201).json({
    message: "Admin Registration Successful",
    success: true,
  });
});

/*
@desc Login an admin
@route POST /api/admin/login
@access Public
*/
const loginAdmin = asyncHandler(async (req, res) => {
  // extracting data by destructuring request body
  const { admin_id, password } = req.body;

  // check if all the fields are present for student log in
  if (!admin_id || !password) {
    res.status(400);
    throw new Error("All Fields Are Required");
  }

  // check if the admin is registered or not
  const admin = await Admin.findById(admin_id);

  // if the student is not registered then throw error
  if (!admin) {
    res.status(401);
    throw new Error("Admin Is Not Registered");
  }

  // check if the password matches
  const isPasswordMatched = bcrypt.compare(password, admin.password);

  // if the password don't match, throw invalid credential error
  if (!isPasswordMatched) {
    res.status(401);
    throw new Error("Invalid Credentials");
  }

  // after all the validation, generate an authorization token
  const token = jwt.sign(
    { userId: admin_id, userRole: admin.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  // Store the token in the cookie
  res
    .status(200)
    .cookie("authcookie", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    })
    .json({ message: "Admin Logged In", success: true });
});

/*
@desc Info of Admin
@route GET /api/admin/auth
@access Private
*/
const getLoggedInAdmin = asyncHandler(async (req, res) => {
  console.log(req.authData);
  res.json(req.authData);
});

/*
@desc Admin Log out
@route GET /api/admin/logout
@access Private
*/
const logoutAdmin = asyncHandler(async (req, res) => {
  res.cookie("authcookie", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "Logout Successfull",
    success: true,
  });
});

module.exports = { registerAdmin, loginAdmin, getLoggedInAdmin, logoutAdmin };
