const connection = require("../Database/connection");

module.exports = {
  async index(req, res) {
    const barbeiroId = req.params.barbeiro;
    const barbeiro = await connection("users")
      .where("id", barbeiroId)
      .select("*")
      .first();

    return res.json(barbeiro);
  },

  async create(req, res) {
    const { data, usuarioId, barbeiroId } = req.body;

    try {
      const [id] = await connection("agendamento").insert({
        data,
        usuarioId,
        barbeiroId,
      });

      console.log("Agendamento Realizado");
      return res.json({ id });
    } catch (error) {
      console.log(error);
    }
  },
};
