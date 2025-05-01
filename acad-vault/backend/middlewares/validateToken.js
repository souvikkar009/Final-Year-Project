const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateInstituteToken = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (authCookie == null) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    jwt.verify(
        authCookie,
        process.env.INSTITUTE_ACCESS_TOKEN_SECRET,
        (err, data) => {
            if (err) {
                res.status(401);
                throw new Error("Unauthorized");
            }
            req.authData = data;
            next();
        }
    );
});

const validateStundetToken = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (authCookie == null) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    jwt.verify(
        authCookie,
        process.env.STUDENT_ACCESS_TOKEN_SECRET,
        (err, data) => {
            if (err) {
                res.status(401);
                throw new Error("Unauthorized");
            }
            req.authData = data;
            next();
        }
    );
});
const validateOrganizationToken = asyncHandler(async (req, res, next) => {
    const authCookie = req.cookies["authcookie"];
    if (!authCookie) {
        res.status(401);
        throw new Error("Unauthorized");
    }

    jwt.verify(
        authCookie,
        process.env.ORGANIZATION_ACCESS_TOKEN_SECRET,
        (err, data) => {
            if (err) {
                res.status(401);
                throw new Error("Unauthorized");
            }
            req.authData = data;
            next();
        }
    );
});

const validateToken = asyncHandler(async (req, res, next) => {
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

module.exports = {
    validateInstituteToken,
    validateStundetToken,
    validateOrganizationToken,
    validateToken,
};
