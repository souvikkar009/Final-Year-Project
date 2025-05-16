const studentDateMap = require("../data/dataMapping");

const getAccessingData = (student, accesing_data) => {
    const studentData = {};

    accesing_data.forEach((path) => {
        let dataPoint = path;
        path = studentDateMap[path];
        const value = path
            .split(".")
            .reduce((acc, key) => (acc ? acc[key] : undefined), student);
        studentData[dataPoint] = value;
    });
    return studentData;
};

module.exports = getAccessingData;
