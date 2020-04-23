const express = require("express");
const routes = express.Router();
const UserController = require("./Controllers/UserController");
const UserControllerCopy = require("./Controllers/UserControllerCopy");
const SessionController = require("./Controllers/SessionController");
const SessionControllerCopy = require("./Controllers/SessionControllerCopy");
const DashboardController = require("./Controllers/DashboardController");
const DashboardControllerCopy = require("./Controllers/DashboardControllerCopy");
const AgendamentoController = require("./Controllers/AgendamentoController");
const AgendamentoControllerCopy = require("./Controllers/AgendamentoControllerCopy");

const DataTeste = require("./Controllers/DataTeste");

routes.post("/signin", SessionController.store);
routes.post("/signinteste", SessionControllerCopy.store);

routes.post("/signup", UserController.create);
routes.post("/signupteste", UserControllerCopy.create);

routes.get("/dashboard", DashboardController.index);
routes.get("/dashboardteste", DashboardControllerCopy.index);

routes.get("/agendamento/:barbeiro", AgendamentoController.index);
routes.get("/agendamentoteste/:providerID", AgendamentoControllerCopy.index);
routes.post("/agendamento/agendado", AgendamentoController.create);
routes.post("/agendamento/agendadoteste", AgendamentoControllerCopy.create);

// //teste
// routes.get("/index", UserControllerCopy.index);

routes.post("/datateste", DataTeste.create);

module.exports = routes;
