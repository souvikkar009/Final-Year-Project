const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler");
const { connectMongoDB } = require("./db/connectDB");
const dotenv = require("dotenv").config();
const initiateIds = require("./others/initiateIds");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// cors
const corsOption = {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
};
app.use(cors(corsOption));

app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", path.join(__dirname, "views")); // Optional: set views directory if not default
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // To handle form data

// connect db
connectMongoDB();

// ran just once to initialise avids in database
// initiateIds();

// server port configuration
const PORT = process.env.PORT || 3031;

// middleware that helps to parse data stream received from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// middleware to handle the authentication and authorization
app.use("/api/auth", require("./routes/auth.routes"));

// middleware to set up api endpoints for students
app.use("/api/student", require("./routes/student.routes"));

// middleware to set up api endpoints for institutes
app.use("/api/institute", require("./routes/institute.routes"));

// middleware to set up api endpoints for organizations
app.use("/api/organization", require("./routes/organization.routes"));

// middleware to set up api endpoints for data sharing
app.use("/api/share", require("./routes/share.routes"));

// last middleware for error handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server Running at port: ${PORT}`);
});
