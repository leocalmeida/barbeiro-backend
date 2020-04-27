const Appointment = require("../Model/Appointment");

module.exports = {
  async index(request, response) {
    //funcão de comparação de Arrays
    //
    function compareArray(arr1, arr2) {
      const finalArray = [];
      arr1.forEach((e) => {
        if (!arr2.includes(e)) {
          finalArray.push(e);
        }
      });
      return finalArray;
    }
    //função de comparacao de dia (hoje)
    //
    function isToday(stringDate) {
      const [mes, dia, ano] = stringDate.split("/");
      const date = new Date();
      if (dia == date.getDate()) {
        return true;
      } else {
        return false;
      }
    }
    //
    /// inicio do código
    ///
    const provider = request.params.providerID;
    const date = request.body.date;
    const likeDate = new RegExp(date, "i");
    const hours = [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ];

    const agendamentos = await Appointment.find({
      providerID: provider,
      date: likeDate,
    }).then((appointments) => appointments);

    const unAvailable = agendamentos.map((agendamento) => {
      const [data, hora] = agendamento.date.split("|");

      return hora;
    });

    //Caso o dia passado seja o mesmo dia, o sistema ocultará os inputs com Hora anterior a atual.
    //
    if (isToday(date)) {
      hours.splice(0, hours.length);
      const data = new Date().getHours();
      const horas = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
      const filtrados = horas.filter((e) => e > data);
      filtrados.forEach((e) => hours.push(e + ":00"));
    }

    const available = compareArray(hours, unAvailable);

    return response.json(available);
  },
};
