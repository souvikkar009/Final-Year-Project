const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.statusCode || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(errorStatusCode).json({
        success: false,
        status: errorStatusCode,
        message: errorMessage,
        stack: process.env.NODE_ENV === "development" ? err.stack : {},
    });
};

module.exports = { errorHandler };
