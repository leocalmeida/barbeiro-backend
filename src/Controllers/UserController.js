const bcrypt = require("bcryptjs");
const Users = require("../Model/Users");

module.exports = {
  async create(request, response) {
    const user = request.body;

    const password = await bcrypt.hash(user.password, 10);
    user.password = password;

    const userDb = await Users.create(user);

    return response.json(userDb);
  },
};
