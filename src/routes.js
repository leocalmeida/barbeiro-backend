const express = require("express");
const routes = express.Router();
const UserController = require("./Controllers/UserController");
const SessionController = require("./Controllers/SessionController");
const DashboardController = require("./Controllers/DashboardController");
const AgendamentoController = require("./Controllers/AgendamentoController");

routes.post("/signin", SessionController.store);

routes.post("/signup", UserController.create);

routes.get("/dashboard", DashboardController.index);

routes.get("/agendamento/:barbeiro", AgendamentoController.index);
routes.post("/agendamento/agendado", AgendamentoController.create);

// //teste
// routes.get("/index", UserController.index);

module.exports = routes;
