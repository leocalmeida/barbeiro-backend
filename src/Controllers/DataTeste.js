const { format, setHours, setMinutes } = require("date-fns");

module.exports = {
    async create(request, response){
        const now = new Date().setHours(15).setMinutes(15);
        const now2 = format(now, "yyyyMMddHHmm");

        return response.json(now2);
    }
}