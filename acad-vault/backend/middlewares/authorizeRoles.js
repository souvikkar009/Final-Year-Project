const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        // console.log(req.authData.userRole, req.authData.userId);

        if (!req.authData || !roles.includes(req.authData.userRole)) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        next();
    };
};

module.exports = authorizeRoles;
