const mongoose = require("mongoose");

const connect = (shopName = "multi-user") => {
  mongoose.connection.close()
  mongoose
    .connect(`mongodb://localhost:27017/${shopName}`)
    .then(() => {
      console.log(`Successfully connected to ${shopName}`);
    })
    .catch((error) => {
      console.log(`can not connect to database, ${error}`);
    });
};

connect();

module.exports = connect;
