const mongoose = require("mongoose");
// const validator = require("validator");

const User = mongoose.model("user", {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passportID: {
    type: Number,
    required: true,
  },
  isActive: { type: Boolean, default: true },
  cash: { type: Number, default: 0 },
  credit: { type: Number, default: 0 },
});

module.exports = User;
