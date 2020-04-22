const bcrypt = require("bcryptjs");
const User = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async store(request, response) {
    const userLogin = request.body;

    const userValidate = await User.findOne({ email: userLogin.email });

    if (!userValidate) {
      return response.json("E-mail não cadastrado");
    }

    const passwordValidate = await bcrypt.compare(
      userLogin.password,
      userValidate.password
    );

    if (!passwordValidate) {
      return response.json("Senha inválida");
    }

    return response.json(userValidate);
  },
};
