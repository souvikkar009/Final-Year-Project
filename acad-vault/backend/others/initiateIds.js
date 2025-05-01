// This function was used only to initialised state wise avids

const avid = require("../models/avid.model");
const { statesCode_Name } = require("../data/states");

const lastIdConst = "000000000000";
const initiateIds = async () => {
    for (const key in statesCode_Name) {
        let lastId = key.concat(lastIdConst);
        const stateIdInfo = await avid.create({
            lastId,
            stateCode: key,
            state: statesCode_Name[key],
        });
        console.log(stateIdInfo);
    }
};

module.exports = initiateIds;
