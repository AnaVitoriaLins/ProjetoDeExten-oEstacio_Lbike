const sequelize = require('../config/database');
const Item = require('./Item');
const Agendamento = require('./Agendamento');
const Funcionario = require('./Funcionario');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

module.exports = {
  Item,
  Agendamento,
  Funcionario,
};
