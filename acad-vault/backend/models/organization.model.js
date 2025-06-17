const mongoose = require("mongoose");

const organization_schema = mongoose.Schema(
    {
        // role
        role: { type: String, default: "organization" },

        _id: String,
        org_id: String,
        organization_name: String,
        email: String,
        password: String,
        access_keys: {
            type: mongoose.Schema.Types.Map,
            default: {},
        }, // every time user need data of students, he/she need to create an access key which will be stored in db
        secret_key: String, // when a user registers, he/she will be assigned a secret key
    },
    { timestamps: true }
);

module.exports = mongoose.model("Organization", organization_schema);
