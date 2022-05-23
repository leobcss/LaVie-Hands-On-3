const express = require("express");
const routes = express.Router();

// const HomeController = require("../controllers/home");
const PsicologoController = require("../controllers/psicologo");
const PacienteController = require("../controllers/paciente");
const AtendimentoController = require("../controllers/atendimento");

routes.get("/psicologos", PsicologoController.index);
routes.get("/psicologos/:id", PsicologoController.show);
routes.post("/psicologos/:id", PsicologoController.store);
routes.put("/psicologos/:id", PsicologoController.update);
routes.delete("/psicologos/:id", PsicologoController.destroy);

routes.get("/pacientes", PacienteController.index);
routes.get("/pacientes/:id", PacienteController.show);
routes.post("/pacientes/:id", PacienteController.store);
routes.put("/pacientes/:id", PacienteController.update);
routes.delete("/pacientes/:id", PacienteController.destroy);

routes.get("/atendimentos", AtendimentoController.index);
routes.get("/atendimentos/:id", AtendimentoController.show);
routes.post("/atendimentos/:id", AtendimentoController.store);

module.exports = routes;
