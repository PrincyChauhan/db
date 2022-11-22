const Customer = require("../models/customerModel");

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({
      status: "success",
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const getAllCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll();
    res.status(200).json({
      status: "success",
      results: customer.length,
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  deleteCustomer,
};
