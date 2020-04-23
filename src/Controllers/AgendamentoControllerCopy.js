const Appointment = require("../Model/Appointment");
const Users = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async index(req, res) {
    const providerID = req.params.providerID;
    

    const provider = await Users.findById({_id: providerID});
    

    return res.json(provider);
  },

  async create(req, res) {
    const appointment = req.body;
    console.log(appointment);
    try {
      const data = await Appointment.create(appointment);

      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  },
};
