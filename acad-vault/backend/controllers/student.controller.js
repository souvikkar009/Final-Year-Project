const expressAsyncHandler = require("express-async-handler");
const Student = require("../models/student.model");

/*
@desc student info
@route GET api/student
@access Private
*/
const getStudentInfo = expressAsyncHandler(async (req, res) => {
    const { userId } = req.authData;

    const student = await Student.findById({ _id: userId }).select(
        "-password -__v -createdAt -updatedAt -role -_id"
    );
    res.json(student);
});

module.exports = { getStudentInfo };
