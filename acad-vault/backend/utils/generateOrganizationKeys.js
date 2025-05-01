const crypto = require("crypto");

// Code for Generating Organization Secret Key
const generateOrganizationSecretKey = () => {
    return crypto.randomBytes(8).toString("hex"); // Generates a 16-character API key
};

const generateOrganizationId = () => {
    return crypto.randomBytes(4).toString("hex"); // Generates a 8-character id string
};

const generateDataAccessKey = () => {
    return crypto.randomBytes(16).toString("hex"); // Generates a 32-character data access string
};

module.exports = {
    generateDataAccessKey,
    generateOrganizationId,
    generateOrganizationSecretKey,
};
