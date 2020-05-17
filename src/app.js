const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const mongoConnect = require("./Config/mongoConnect");

const app = express();

mongoose.connect({
  mongoConnect,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
