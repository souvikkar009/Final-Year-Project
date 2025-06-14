const mongoose = require("mongoose");

const institute_schema = mongoose.Schema(
    {
        // role
        role: { type: String, default: "institute" },
        _id: Number,
        institute_name: String,
        institute_id: Number,
        password: String,
        // insitute type based on the level of education
        institute_type: {
            type: String,
            enum: [
                "School",
                "Board",
                "College",
                "University",
                "Multi-Disciplinary Institute",
            ],
            default: null,
        },
        institute_level: {
            type: String,
            enum: ["secondary", "higher_secondary", "higher_studies"], // currently there are three types of institute in our platform
            default: null,
        },
        // For higher level institutions
        program_levels: { type: [String], default: null }, // program level or degree level offered by the institute e.g. doctoral, undergraduation, postgraduation
        program_names: { type: [String], default: null }, // degree e.g. Btech, BE, BCA, BBA etc offered by
    },
    { timestamps: true }
);

module.exports = mongoose.model("Institute", institute_schema);
