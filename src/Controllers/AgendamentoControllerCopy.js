const Appointment = require("../Model/Appointment");
const Users = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async index(req, res) {
    const providerIDURL = req.params.providerID;  

    const hours  = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
    const provider = await Users.findById({_id: providerIDURL});
    const disponivel = await Appointment.find({providerID: providerIDURL}) ;
    
    console.log(disponivel);
    console.log("************************");
   
    
    

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
