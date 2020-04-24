module.exports = {
  //'2020-04-24T04:00:00.000Z'
  async create(request, response) {
    const date = request.body;

    return response.json(date);
  },
};
