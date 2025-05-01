const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`DB Connected.
${connect.connection.host}
${connect.connection.name}`);
  } catch (error) {
    console.log("DB connection fail.");
    process.exit(1);
  }
};

module.exports = { connectMongoDB };
