const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

const app = express();

mongoose.connect(MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
