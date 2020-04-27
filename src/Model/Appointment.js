const mongoose = require("mongoose");

const Appointment = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  providerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = mongoose.model("Appointment", Appointment);
