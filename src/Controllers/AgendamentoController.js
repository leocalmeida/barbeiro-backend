const Appointment = require("../Model/Appointment");
const Users = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async index(req, res) {
    const providerID = req.params.providerID;

    const provider = await Users.findById({ _id: providerID });

    return res.json(provider);
  },

  async create(req, res) {
    const appointment = req.body;

    const provider = await Appointment.find({
      date: appointment.date,
      providerID: appointment.providerID,
    }).then((appointments) => appointments);

    if (provider.length > 0) {
      return res.json(false);
    } else {
      await Appointment.create(appointment);
      return res.json(true);
    }
  },
};
