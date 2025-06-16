const mongoose = require("mongoose");

const admin_schema = mongoose.Schema(
  {
    _id: String,
    admin_name: String,
    admin_id: String,
    password: String,
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", admin_schema);
