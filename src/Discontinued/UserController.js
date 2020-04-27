const bcrypt = require("bcryptjs");
const generateUniqueID = require("../Util/generateUniqueID");

const connection = require("../Database/connection");

module.exports = {
  async create(request, response) {
    const { nome, email, senha, cabelereiro } = request.body;
    const id = generateUniqueID();

    const user = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    if (user != null) {
      return response.json("Usuário já cadastrado");
    }

    const password = await bcrypt.hash(senha, 10);

    await connection("users").insert({
      id,
      nome,
      email,
      password,
      cabelereiro,
    });
    return response.json({ nome, id });
  },

  // //apenas para teste
  // async index(req, res) {
  //   const user = await connection("users").select([
  //     "nome",
  //     "email",
  //     "cabelereiro",
  //   ]);

  //   return res.json(user);
  // },
};
