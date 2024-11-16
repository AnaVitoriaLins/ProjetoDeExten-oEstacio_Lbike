const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Agendamento = sequelize.define('Agendamento', {
  cliente_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cliente_telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cliente_endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_hora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Agendamento;
