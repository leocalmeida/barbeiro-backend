const User = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async index(request, response) {
    const userID = request.headers.authorization;
    console.log(userID);

    const userValidate = await User.findById({ _id: userID });
    console.log(userValidate);

    if (userValidate) {
      const providers = await User.find({ provider: true });
      console.log(providers);
      return response.json(providers);
    }
  },
};
