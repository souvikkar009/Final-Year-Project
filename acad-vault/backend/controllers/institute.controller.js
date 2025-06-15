const expressAsyncHandler = require("express-async-handler");
const fs = require("fs/promises");
const Student = require("../models/student.model");
const Institute = require("../models/institute.model");
const studentDateMap = require("../data/dataMapping");
const { type } = require("os");

/*
@desc register student in Secondary
@route PATCH api/institute/secondary/register
@access Private
*/
const registerStudentInSecondary = expressAsyncHandler(async (req, res) => {
    const { avid, ...secondary_data } = req.body;
    const institute_id = req.authData.userId;

    const { institute_level } = await Institute.findById(institute_id).select(
        "institute_level"
    );

    if (institute_level !== "secondary") {
        res.status(401);
        throw new Error("Unauthorized!!!...");
    }

    if (
        !avid ||
        !secondary_data.secondary_school_name ||
        !secondary_data.secondary_board_name ||
        !secondary_data.secondary_subjects
    ) {
        res.status(400);
        throw new Error("All Fields Are Required");
    }

    const secondary = { "secondary.institute_id": institute_id };
    for (let dataPoint in secondary_data) {
        secondary[studentDateMap[dataPoint]] = secondary_data[dataPoint];
    }

    const student = await Student.findByIdAndUpdate(avid, secondary, {
        new: true,
    });

    if (!student) {
        res.status(400);
        throw new Error("Student Not found");
    }
    res.json({
        message: `Student Successfully registered in Secondary Level`,
        success: true,
    });
});

/*
@desc register student in Higher Secondary
@route PATCH api/institute/higher_secondary/register
@access Private
*/
const registerStudentInHigherSecondary = expressAsyncHandler(
    async (req, res) => {
        const { avid, ...higher_secondary_data } = req.body;
        const institute_id = req.authData.userId;

        const { institute_level } = await Institute.findById(
            institute_id
        ).select("institute_level");

        if (institute_level !== "higher_secondary") {
            res.status(401);
            throw new Error("Unauthorized!!!...");
        }

        if (
            !avid ||
            !higher_secondary_data.higher_secondary_school_name ||
            !higher_secondary_data.higher_secondary_board_name ||
            !higher_secondary_data.higher_secondary_subjects ||
            !higher_secondary_data.higher_secondary_dicipline
        ) {
            res.status(400);
            throw new Error("All Fields Are Required");
        }

        const higher_secondary = {
            "higher_secondary.institute_id": institute_id,
        };
        for (let dataPoint in higher_secondary_data) {
            higher_secondary[studentDateMap[dataPoint]] =
                higher_secondary_data[dataPoint];
        }
        const student = await Student.findByIdAndUpdate(
            avid,
            higher_secondary,
            { new: true }
        );

        if (!student) {
            res.status(400);
            throw new Error("Student Not found");
        }
        res.json({
            message: `Student Successfully registered in Higher Secondary Level`,
            success: true,
        });
    }
);

/*
@desc register student in higher studies
@route POST api/institute/higher_studies/register
@access Private
*/
const registerStudentsInHigherStudy = expressAsyncHandler(async (req, res) => {
    const { avid, program } = req.body;
    const { program_level, ...program_data } = program;
    const institute_id = req.authData.userId;

    const institute = await Institute.findById(institute_id).select(
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
@route POST api/institute/secondary/upload-data
@access Private
*/
const uploadSecondaryAcademicsData = expressAsyncHandler(async (req, res) => {
    const filePath = req.file.path;
    const institute_id = req.authData.userId;
    const institute = await Institute.findById(institute_id).select(
        "institute_name institute_level -_id"
    );
    // console.log(institute);
    if (!institute || institute.institute_level !== "secondary") {
        res.status(401);
        throw new Error("Unauthorized!!!...");
    }

    try {
        const fileData = await fs.readFile(filePath, "utf-8");
        const payload = JSON.parse(fileData);

        let noOfUpdates = 0;
        const payloadSize = payload.length;

        for (const student_data of payload) {
            const { avid, ...secondary_data } = student_data;

            const secondary = {};
            for (let dataPoint in secondary_data) {
                secondary[studentDateMap[dataPoint]] =
                    secondary_data[dataPoint];
            }
            // console.log(secondary);

            const student_institute_id_data = await Student.findById(
                avid
            ).select("secondary.institute_id -_id");

            const stundent_institute_id =
                student_institute_id_data.secondary.institute_id;

            // console.log(stundent_institute_id, institute_id);
            // console.log(typeof stundent_institute_id, typeof institute_id);

            // no type checking
            if (stundent_institute_id != institute_id) continue;

            const student = await Student.findByIdAndUpdate(avid, secondary, {
                new: true,
            });

            if (student) {
                noOfUpdates++;
            }
        }

        // Delete the file after processing
        await fs.unlink(filePath);
        console.log(`${filePath} file deleted successfully`);

        // Send final response
        res.json({
            requestedUpdates: payloadSize,
            successfulUpdates: noOfUpdates,
        });
    } catch (error) {
        console.error(error);
        res.status(500);
        throw new Error("Internal server error while processing the file");
    }
});

/*
@desc upload student higher secondary academic data
@route POST api/institute/higher-secondary/upload-data
@access Private
*/
const uploadHigherSecondaryAcademicsData = expressAsyncHandler(
    async (req, res) => {
        const filePath = req.file.path;
        const institute_id = req.authData.userId;
        const institute = await Institute.findById(institute_id).select(
            "institute_name institute_level -_id"
        );
        // console.log(institute.institute_level);

        if (!institute || institute.institute_level !== "higher_secondary") {
            res.status(401);
            throw new Error("Unauthorized!!!...");
        }
        try {
            const fileData = await fs.readFile(filePath, "utf-8");
            const payload = JSON.parse(fileData);

            let noOfUpdates = 0;
            const payloadSize = payload.length;

            for (const student_data of payload) {
                const { avid, ...higher_secondary_data } = student_data;

                const higher_secondary = {};
                for (let dataPoint in higher_secondary_data) {
                    higher_secondary[studentDateMap[dataPoint]] =
                        higher_secondary_data[dataPoint];
                }
                // console.log(higher_secondary);

                const student_institute_id_data = await Student.findById(
                    avid
                ).select("higher_secondary.institute_id -_id");

                const stundent_institute_id =
                    student_institute_id_data.higher_secondary.institute_id;

                // console.log(stundent_institute_id, institute_id);
                // console.log(typeof stundent_institute_id, typeof institute_id);

                // no type checking
                if (stundent_institute_id != institute_id) continue;

                const student = await Student.findByIdAndUpdate(
                    avid,
                    higher_secondary,
                    { new: true }
                );

                if (student) {
                    noOfUpdates++;
                }
            }

            // Delete the file after processing
            await fs.unlink(filePath);
            console.log(`${filePath} file deleted successfully`);

            // Send final response
            res.json({
                requestedUpdates: payloadSize,
                successfulUpdates: noOfUpdates,
            });
        } catch (error) {
            console.error(error);
            res.status(500);
            throw new Error("Internal server error while processing the file");
        }
    }
);

/*
@desc Get Institute Information
@route POST api/institute
@access Private
*/
const getInstituteInfo = expressAsyncHandler(async (req, res) => {
    const { userId } = req.authData;

    const institute = await Institute.findById({ _id: userId }).select(
        "-password -__v -createdAt -updatedAt -role -_id"
    );

    res.json(institute);
});

module.exports = {
    uploadSecondaryAcademicsData,
    uploadHigherSecondaryAcademicsData,
    registerStudentsInHigherStudy,
    getInstituteInfo,
    registerStudentInSecondary,
    registerStudentInHigherSecondary,
};
