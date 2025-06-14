const asyncHandler = require("express-async-handler");

/*
@desc Info of Logged in User
@route POST /api/auth/who
@access Private
*/
const loggedInUserInfo = asyncHandler(async (req, res) => {
    console.log(req.authData);
    res.json(req.authData);
});

/*
@desc Info of Logged in User
@route GET /api/auth/logout
@access Private
*/

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("authcookie", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({
        message: "Logout Successfull",
        success: true,
    });
});

module.exports = { loggedInUserInfo, logoutUser };
