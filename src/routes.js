const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");
const SessionController = require("./Controllers/SessionController");
const DashboardController = require("./Controllers/DashboardController");
const AgendamentoController = require("./Controllers/AgendamentoController");
const AvailabelController = require("./Controllers/AvailableController");

const DataTeste = require("./Controllers/DataTeste");

routes.post("/signin", SessionController.store);

routes.post("/signup", UserController.create);

routes.get("/dashboard", DashboardController.index);

routes.get("/agendamento/:providerID", AgendamentoController.index);

routes.post("/available/:providerID", AvailabelController.index);
// routes.post("/available/:providerID", AvailabelController.index);

routes.post("/agendamento/agendado", AgendamentoController.create);

// //teste
// routes.get("/index", UserControllerCopy.index);

routes.post("/teste", DataTeste.create);

module.exports = routes;
