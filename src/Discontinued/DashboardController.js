const connection = require("../Database/connection");

module.exports = {
  async index(req, res) {
    const clienteId = req.headers.authorization;

    const cliente = await connection("users")
      .where("id", clienteId)
      .select(["id"])
      .first();

    if (cliente != null) {
      const cabelereiros = await connection("users")
        .where("cabelereiro", true)
        .select(["id", "nome", "email", "cabelereiro"]);

      return res.json(cabelereiros);
    }
  },
};
