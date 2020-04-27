const bcrypt = require("bcryptjs");
const connection = require("../Database/connection");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    const id = req.header.authorization;

    const user = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    // console.log(user);

    if (user == null) {
      return res.json("Usuário não encontrado");
    }

    const valida = await bcrypt.compare(password, user.password);

    const response = {
      valida: valida,
      user: user,
    };
    return res.json(response);
  },
};
