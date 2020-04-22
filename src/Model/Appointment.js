const mongoose = require("mongoose");

const Appointment = new mongoose.Schema(
{
	date: {
		type: String,
		required: true,
	},
	user_id: {
		type: String,
		required: true,
	},
	provider_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
	},
}
);

module.exports = mongoose.model("Appointment", Appointment);