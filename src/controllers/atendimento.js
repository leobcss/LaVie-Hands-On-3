const { Op } = require("sequelize");

const { Atendimento } = require("../models");

const AtendimentoController = {
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
};

module.exports = AtendimentoController;
