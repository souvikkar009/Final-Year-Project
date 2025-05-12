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

module.exports = loggedInUserInfo;
