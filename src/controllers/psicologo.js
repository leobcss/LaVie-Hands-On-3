const { Op } = require("sequelize");

const { Psicologo } = require("../models");

const PsicologoController = {
  index: async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  store: async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  show: async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  update: async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  destroy: async (req, res) => {},
};

module.exports = PsicologoController;
