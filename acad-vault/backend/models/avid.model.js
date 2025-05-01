const mongoose = require("mongoose");

const avid_schema = mongoose.Schema({
    state: String,
    stateCode: String,
    lastId: String,
});

module.exports = mongoose.model("avid", avid_schema);
