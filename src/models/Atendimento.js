const { DataTypes } = require("sequelize");

const db = require("../database");
const Paciente = require("./Paciente");

const Atendimento = db.define(
  "atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Paciente,
        key: "id",
      },
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "atendimento", timestamps: false, underscored: true }
);

module.exports = Atendimento;
