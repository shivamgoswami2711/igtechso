const mongoose = require("mongoose");

const database = async () => {
mongoose
    .connect(process.env.DB_URL_DEV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = database;
