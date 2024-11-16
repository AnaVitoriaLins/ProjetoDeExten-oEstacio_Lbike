const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dias_trabalhados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_pago: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Funcionario;
