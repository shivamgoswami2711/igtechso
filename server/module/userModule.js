const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Empty"],
    },
    email: {
      type: String,
      required: [true, "Email is Empty"],
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is Empty"],
    },
  },
  { timestamps: true }
);

// pass hashing
userSchema.pre("save", async function (next) {
  // chack pass modified is true then pass hash auther wise => next()
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
});

// genrate web token
userSchema.methods.getJwtToken = function () {
  return Jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// compare password
userSchema.methods.comperePassword = async function (inPassword) {
  return await bcrypt.compare(inPassword, this.password);
};




module.exports = mongoose.model("user", userSchema);
