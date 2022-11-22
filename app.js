const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const AppError = require("./utils/appError");

// Import Models
const UserModel = require("./models/userModel");

// Import Database connection
const Database = require("./db");

const app = express();

//Parse Body Content Coming From Every Requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import routes
const AuthRouter = require("./routes/authRoute");
const CustomerRouter = require("./routes/customerRoute");

// Routes for app
app.use("/users", AuthRouter);
app.use("/customer", CustomerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.listen(3000, () => {
  console.log("Port is listing on 3000");
});
