const { Agendamento } = require('../models');

// Função para obter todos os agendamentos
exports.getAllAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();
    res.status(200).json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
};

// Função para criar um novo agendamento
exports.createAgendamento = async (req, res) => {
  try {
    const novoAgendamento = await Agendamento.create(req.body);
    res.status(201).json(novoAgendamento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar agendamento' });
  }
};

// Função para atualizar um agendamento
exports.updateAgendamento = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAgendamento = await Agendamento.update(req.body, { where: { id } });

    if (updatedAgendamento[0] === 0) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    res.status(200).json({ message: 'Agendamento atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar agendamento' });
  }
};

// Função para excluir um agendamento
exports.deleteAgendamento = async (req, res) => {
  try {
    const { id } = req.params;
    await Agendamento.destroy({ where: { id } });
    res.status(200).json({ message: 'Agendamento excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir agendamento' });
  }
};

// Função para buscar agendamentos
exports.searchAgendamentos = async (req, res) => {
  try {
    const { data, cliente } = req.query;
    const whereClause = {};
    if (data) whereClause.data = data; 
    if (cliente) whereClause.cliente = cliente; 

    const agendamentos = await Agendamento.findAll({ where: whereClause });
    res.status(200).json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
};
