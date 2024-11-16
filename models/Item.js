const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_unitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  valor_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});


module.exports = Item;
