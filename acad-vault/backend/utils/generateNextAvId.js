const avid = require("../models/avid.model");
const { statesName_Code } = require("../data/states");



// AvId Generating Code

const generateNextIdByState = async (state) => {
    const stateCode = statesName_Code[state];

    const avidData = await avid.findOne({ stateCode });

    let lastIdAsNumber = BigInt("1".concat(avidData.lastId.substring(2)));
    lastIdAsNumber++;

    let lastId = lastIdAsNumber.toString();
    lastId = stateCode.concat(lastId.substring(1));

    await avid.findOneAndUpdate({ stateCode }, { lastId });

    return lastId;
};

module.exports = generateNextIdByState;
