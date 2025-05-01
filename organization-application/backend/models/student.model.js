const mongoose = require("mongoose");

const student_schema = mongoose.Schema(
  {
    // data required during registration
    full_name: { first_name: String, last_name: String },
    mobile_no: String,
    // dob: Date,
    // avid: String,

    // state: String,
    // disctrict: String,
    // pin_code: Number,
    // address: String,
    // aadhar_no: String,
    // email: String,
    // password: String,

    /* -------------------------------------------------------- */

    /*
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
                enum: ["science", "arts", "commerce"],
                default: null,
            },
            subjects: [String],
            marks: {
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
        */
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", student_schema);
