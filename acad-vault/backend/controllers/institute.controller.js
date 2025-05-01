const expressAsyncHandler = require("express-async-handler");
const fs = require("fs");
const Student = require("../models/student.model");
const Institute = require("../models/institute.model");

/*
@desc register student in higher studies
@route POST api/institute/higher-studies/register
@access Private
*/
const registerStudentsInHigherStudy = expressAsyncHandler(async (req, res) => {
    const { avid, program } = req.body;
    const { program_level, ...program_data } = program;
    const institute_id = req.authData.userId;

    const institute = await Institute.findById({ _id: institute_id }).select(
        "institute_name institute_level program_levels -_id"
    );

    if (!institute.program_levels.includes(program_level)) {
        res.status(401);
        throw new Error(`Institute do not offer ${program_level}`);
    }
    program_data.institute_name = institute.institute_name;
    const student = await Student.findOneAndUpdate(
        { avid },
        {
            $set: {
                [`higher_studies.${program_level}`]: program_data,
            },
        }
    );
    if (!student) {
        res.status(400);
        throw new Error("Student Not found");
    }
    res.json({
        message: `Student Successfully registered in ${program_level} at ${institute.institute_name}`,
    });
});

/*
@desc upload student secondary academic data
@route POST api/institute/secondary/upload/academic-data
@access Private
*/
const uploadSecondaryAcademicsData = expressAsyncHandler(async (req, res) => {
    const filePath = req.file.path;
    const institute_id = req.authData.userId;
    const insitute = await Institute.findById({ _id: institute_id }).select(
        "institute_name institute_level -_id"
    );
    if (insitute.institute_level !== "secondary") {
        res.status(401);
        throw new Error("Unauthorized!!!...");
    }
    fs.readFile(filePath, "utf-8", (err, fileData) => {
        if (err) {
            res.status(500);
            throw new Error("Failed to read JSON file.");
        }
        const payload = JSON.parse(fileData);

        payload.forEach(async (student_secondary_data) => {
            const { avid, ...secondary_data } = student_secondary_data;

            const student = await Student.findOneAndUpdate(
                { avid },
                secondary_data
            );
            if (!student) return;
            else console.log(avid + " : Secondary Data Uploaded");
        });
        fs.unlink(filePath, (err) => {
            if (err) {
                res.status(500);
                throw new Error("Error deleting uploaded file");
            } else {
                console.log(`${filePath} file deleted successfully`);
            }
        });
        res.json({
            message: "Student's Secondary Data Uploaded",
        });
    });
});

/*
@desc upload student higher secondary academic data
@route POST api/institute/higher-secondary/upload/academic-data
@access Private
*/
const uploadHigherSecondaryAcademicsData = expressAsyncHandler(
    async (req, res) => {
        const filePath = req.file.path;
        const institute_id = req.authData.userId;
        const insitute = await Institute.findOne({ institute_id }).select(
            "institute_name institute_level -_id"
        );
        if (insitute.institute_level !== "higher_secondary") {
            res.status(401);
            throw new Error("Unauthorized!!!...");
        }
        fs.readFile(filePath, "utf-8", (err, fileData) => {
            if (err) {
                res.status(500);
                throw new Error("Failed to read JSON file.");
            }
            const payload = JSON.parse(fileData);

            payload.forEach(async (student_data) => {
                const { avid, ...higher_secondary_data } = student_data;

                const student = await Student.findOneAndUpdate(
                    { avid },
                    higher_secondary_data
                );
                if (!student) return;
                else console.log(avid + " : Higher Secondary Data Uploaded");
            });
            fs.unlink(filePath, (err) => {
                if (err) {
                    res.status(500);
                    throw new Error("Error deleting uploaded file");
                } else {
                    console.log(`${filePath} file deleted successfully`);
                }
            });
            res.json({
                message: "Student's Higher Secondary Data Uploaded",
            });
        });
    }
);

module.exports = {
    uploadSecondaryAcademicsData,
    uploadHigherSecondaryAcademicsData,
    registerStudentsInHigherStudy,
};
