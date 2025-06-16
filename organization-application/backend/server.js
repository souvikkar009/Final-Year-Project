const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectMongoDB } = require("./db/connectDB");
const axios = require("axios");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// connect db
connectMongoDB();

// server port configuration
const PORT = process.env.PORT || 3029;

// middleware that helps to parse data stream received from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
const corsOption = {
  origin: ["http://localhost:5174"],
  credentials: true,
};
app.use(cors(corsOption));

app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", "./views"); // Optional: set views directory if not default
app.use(express.urlencoded({ extended: true })); // To handle form data

app.use("/api/admin", require("./routes/admin.routes"));

// POST /api/receive-data
app.post("/api/receive-data", (req, res) => {
  const { studentData } = req.body;

  console.log("Student Data:", studentData);

  // Save data or process it
  res.status(200).json({ success: true });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Running at port: ${PORT}`);
});
