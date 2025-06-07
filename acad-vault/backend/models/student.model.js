const mongoose = require("mongoose");

const student_schema = mongoose.Schema(
    {
        _id: String,

        // role
        role: { type: String, default: "student" },

        // data required during registration
        full_name: { first_name: String, last_name: String },
        avid: String,
        dob: Date,
        state: String,
        district: String,
        gender: { type: String, enum: ["Male", "Female"], default: null },
        pin_code: Number,
        address: String,
        mobile_no: String,
        aadhar_no: String,
        email: String,
        password: String,

        /* -------------------------------------------------------- */

        // data to be stored by academic institutions
        secondary: {
            school_name: String,
            board_name: String,
            examination_year: Number,
            registration_no: String,
            enrollment_no: String, // roll no
            subjects: [String],
            marks_subjects: {
                type: mongoose.Schema.Types.Map,
                default: {},
            },
            // marks given by the boards
            marks_total: Number,
            marks_obtained: Number,

            // marks including additional subjecs
            marks_total_actual: Number,
            marks_obtained_actual: Number,
        },
        higher_secondary: {
            school_name: String,
            board_name: String,
            examination_year: String,
            registration_no: String,
            enrollment_no: String, // roll no
            dicipline: {
                type: String,
                enum: ["Science", "Arts", "Commerce"],
                default: null,
            },
            subjects: { type: [String], default: null },
            marks_subjects: {
                type: mongoose.Schema.Types.Map,
                default: {},
            },
            // marks given by boards
            marks_total: Number,
            marks_obtained: Number,

            // marks including addional subjects
            marks_total_actual: Number,
            marks_obtained_actual: Number,
        },
        higher_studies: { type: mongoose.Schema.Types.Mixed, default: null },

        /* --------------------------------------------------------- */

        // optional data that student can store
        achievements: { type: [mongoose.Schema.Types.Mixed], default: null },
        cetifications: { type: [mongoose.Schema.Types.Mixed], default: null },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", student_schema);
