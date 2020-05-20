const express = require("express");
const routes = express.Router();
// const multerConfig = require("./Config/multer");
// const upload = require("multer")(multerConfig);

const UserController = require("./Controllers/UserController");
const SessionController = require("./Controllers/SessionController");
const DashboardController = require("./Controllers/DashboardController");
const AgendamentoController = require("./Controllers/AgendamentoController");
const AvailabelController = require("./Controllers/AvailableController");

routes.post("/signin", SessionController.store);

routes.post("/signup", UserController.create);

routes.get("/dashboard", DashboardController.index);

routes.get("/agendamento/:providerID", AgendamentoController.index);

routes.post("/available/:providerID", AvailabelController.index);

routes.post("/agendamento/agendado", AgendamentoController.create);

module.exports = routes;
