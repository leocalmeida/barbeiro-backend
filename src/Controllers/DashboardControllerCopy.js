const User = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async index(request, response) {
    const userID = request.headers.authorization;

    const userValidate = await User.findById({ _id: userID });

    if (userValidate) {
      const providers = await User.find({ provider: true });
      return response.json(providers);
    }
  },
};
