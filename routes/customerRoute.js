const express = require("express");
const customerController = require("../controllers/customerController");
const customerRouter = express.Router();

customerRouter
  .route("/")
  .post(customerController.createCustomer)
  .get(customerController.getAllCustomer);

customerRouter
  .route("/:id")
  .get(customerController.getCustomerById)
  .delete(customerController.deleteCustomer);

module.exports = customerRouter;
