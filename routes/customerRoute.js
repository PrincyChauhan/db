const express = require("express");
const customerController = require("../controllers/customerController");
const customerRouter = express.Router();

customerRouter.route("/").post(customerController.createCustomer);

module.exports = customerRouter;
