const asyncHandler = require("express-async-handler");
const StudentData = require("../models/studentData.model");

const drive_id = 1001;

/*
@desc Get data
@route POST /api/getdata
@access Public
*/

const getStudentData = asyncHandler(async (req, res) => {
  const { studentData } = req.body;

  console.log(studentData, typeof studentData);

  const newStudentData = await StudentData.create({
    drive_id,
    studentData,
  });

  if (!newStudentData) {
    res.status(500);
    throw new Error("Student Data Storing Failed");
  }

  console.log(newStudentData);

  res.status(200).json({ success: true });
});

module.exports = getStudentData;
