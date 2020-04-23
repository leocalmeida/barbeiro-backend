const bcrypt = require("bcryptjs");
const User = require("../Model/Users");
const mongoose = require("mongoose");

module.exports = {
  async store(request, response) {
    const userLogin = request.body;

    console.log(userLogin);

    const userValidate = await User.findOne({ email: userLogin.email });

    console.log(userValidate);

    if (!userValidate) {
      return response.json("E-mail não cadastrado");
    }

    const passwordValidate = await bcrypt.compare(
      userLogin.password,
      userValidate.password
    );

    console.log(passwordValidate);

    if (!passwordValidate) {
      return response.json("Senha inválida");
    }

    console.log(userValidate);
    return response.json(userValidate);
  },
};
