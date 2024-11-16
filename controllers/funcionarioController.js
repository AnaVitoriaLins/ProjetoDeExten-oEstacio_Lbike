// controllers/funcionarioController.js
const Funcionario = require('../models/Funcionario');

// Função para obter todos os funcionários
exports.getAllFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar funcionários' });
  }
};

// Função para criar um novo funcionário
exports.createFuncionario = async (req, res) => {
  const { nome, cpf, telefone, endereco, dias_trabalhados, valor_pago } = req.body;

  // Validação simples
  if (!nome || !cpf || !telefone || !endereco || dias_trabalhados == null || valor_pago == null) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const novoFuncionario = await Funcionario.create({ nome, cpf, telefone, endereco, dias_trabalhados, valor_pago });
    res.status(201).json(novoFuncionario);
  } catch (error) {
    console.error('Erro ao criar funcionário:', error);
    res.status(500).json({ error: 'Erro ao criar funcionário' });
  }
};

// Função para atualizar um funcionário
exports.updateFuncionario = async (req, res) => {
  const { id } = req.params;
  const { nome, telefone, endereco, dias_trabalhados, valor_pago } = req.body;

  try {
    const [updated] = await Funcionario.update({ nome, telefone, endereco, dias_trabalhados, valor_pago }, { where: { id } });

    if (updated) {
      const updatedFuncionario = await Funcionario.findByPk(id);
      return res.status(200).json(updatedFuncionario);
    }
    throw new Error('Funcionário não encontrado');
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar funcionário' });
  }
};

// Função para excluir um funcionário
exports.deleteFuncionario = async (req, res) => {
  const { id } = req.params;

  try {
    await Funcionario.destroy({ where: { id } });
    res.status(200).json({ message: 'Funcionário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir funcionário' });
  }
};
