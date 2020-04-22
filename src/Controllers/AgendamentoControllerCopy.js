const Appointment = require("../Model/Appointment");
const mongoose = require("mongoose");

module.exports = {
  // async index(req, res) {
  //   const barbeiroId = req.params.barbeiro;

  //   const barbeiro = await connection("users")
  //     .where("id", barbeiroId)
  //     .select("*")
  //     .first();

  //   return res.json(barbeiro);
  // },

  async create(req, res) {
    const appointment = req.body;

    try {
      const data = await Appointment.create(appointment);

      return res.json(data);
    } catch (error) {
      console.log(error);
    }
  },
};
