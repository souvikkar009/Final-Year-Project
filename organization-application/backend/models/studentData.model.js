const mongoose = require("mongoose");

const studentData_schema = mongoose.Schema(
  {
    drive_id: number,
    student: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);
const StudentData = mongoose.model("StudentData", studentData_schema);
module.exports = StudentData;
