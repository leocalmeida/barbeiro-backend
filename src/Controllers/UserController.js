const bcrypt = require("bcryptjs");
const Users = require("../Model/Users");

//const connection = require("../Database/connection");

module.exports = {
  async create(request, response) {
    const user = request.body;
    const { filename: avatar } = request.file;

    const password = await bcrypt.hash(user.password, 10);
    user.password = password;

    const userDb = await Users.create({ ...user, avatar });

    return response.json(userDb);
  },

  //apenas para teste
  // async index(req, res) {
  //   const user = await Users.find({});

  //   return res.json(user);
  // },
};
