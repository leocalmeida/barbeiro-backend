const mongoose = require("mongoose");

const Hours = new mongoose.Schema(
{
	date: {
		type: String,
		required: true,
	},
}
);

module.exports = mongoose.model("Hours", Hours);