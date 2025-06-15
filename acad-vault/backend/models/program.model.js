const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
    institute_name: String,
    institute_id: String,
    enrollment_no: String, // institute provided
    registration_no: String, // institute provided
    program_level: String, // undergraduation, postgraduation, diploma, iti
    program_name: String, // bachelor of engineering, bachelor of arts, bachelor of commerce
    program_type: {
        type: String,
        enum: ["honours", "general"],
        default: null,
    },
    grading_scale: {
        type: String,
        enum: ["percentage", "10-point GPA", "4-point GPA"],
        default: "10-point GPA",
    },
    major: String, // IT, CSE, Mathematics, Geography, Physics
    minors: [String], // for those having minor subjects along with majors
    general_subjects: [String], // for pass course only
    duration_in_year: Number, // duration like 4 year, 3 year, 5 year
    academic_term: {
        type: String,
        enum: ["annual", "semester", "trimester", "quarter"],
        default: "semester",
    },
    academic_data: {
        type: mongoose.Schema.Types.Mixed,
    },
    /*
    academic_data: {
        year_1: {
            semester_1: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
            semester_2: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
        },
        year_2: {
            semester_3: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
            semester_4: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
        },
        year_3: {
            semester_5: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
            semester_6: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
        },
        year_4: {
            semester_7: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
            semester_8: {
                subjects: {
                    theory: [String],
                    practical: [String],
                },
                marks_subjects:{
                    theory:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    },
                    practical:{
                        type: mongoose.Schema.Types.Map,
                        default: {},
                    }
                }
            },
        },
    },
    */

    starting_date: String,
    ending_date: String,
});
