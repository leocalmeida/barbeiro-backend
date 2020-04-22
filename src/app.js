const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb+srv://leocalmeida:lcaajj21@barbershop-s6ao9.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, useUnifiedTopology: true,
    }
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
