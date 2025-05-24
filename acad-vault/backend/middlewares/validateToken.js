const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateInstituteToken = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (authCookie == null) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    jwt.verify(authCookie, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        req.authData = data;
        next();
    });
});

const validateTokenForAll = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (authCookie == null) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    jwt.verify(authCookie, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        req.authData = data;
        next();
    });
});
const validateOrganizationToken = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (!authCookie) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    jwt.verify(authCookie, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        req.authData = data;
        next();
    });
});

const validateToken = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (!authCookie) {
        res.status(200);
        req.authData = { userId: null, userRole: "unauthorized" };
        next();
        return;
    }

    jwt.verify(authCookie, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        req.authData = data;
        next();
    });
});

module.exports = {
    // validateInstituteToken,
    validateTokenForAll,
    // validateOrganizationToken,
    validateToken,
};
