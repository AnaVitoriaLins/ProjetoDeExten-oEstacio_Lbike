const express = require('express');
const cors = require('cors'); 
const sequelize = require('./config/database');
const app = express();

app.use(cors()); 
app.use(express.json());

// Middlewares
app.use(express.urlencoded({ extended: true }));

// Rotas
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/itens', itemRoutes);

// AGENDAMENTO
const agendamentoRoutes = require('./routes/agendamentoRoutes'); 
app.use('/api/agendamentos', agendamentoRoutes);

// FUNCIONARIO
const funcionarioRoutes = require('./routes/funcionarioRoutes');
app.use('/api/funcionarios', funcionarioRoutes);

// Inicialização do Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados.');
  } catch (error) {
    console.error('Erro de conexão:', error);
  }
  console.log(`Servidor rodando na porta ${PORT}`);
});



