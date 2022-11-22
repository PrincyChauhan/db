const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  }
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
