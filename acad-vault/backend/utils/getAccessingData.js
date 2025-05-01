const getAccessingData = (student, accesing_data) => {
    const studentData = {};

    accesing_data.forEach((path) => {
        const value = path
            .split(".")
            .reduce((acc, key) => (acc ? acc[key] : undefined), student);
        studentData[path] = value;
    });
    return studentData;
};

module.exports = getAccessingData;
