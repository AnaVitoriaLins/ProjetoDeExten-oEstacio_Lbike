const { Item } = require('../models');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens' });
  }
};

exports.createItem = async (req, res) => {
    try {
      const { quantidade, valor_unitario } = req.body;
      
      // Calcular o valor_total
      const valor_total = quantidade * valor_unitario;
  
      const newItem = await Item.create({
        ...req.body,
        valor_total // Inclui o valor_total calculado
      });
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Erro ao criar item' });
    }
  };
  
  

  exports.updateItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { quantidade, valor_unitario } = req.body;
  
      // Inicializa o objeto de atualização
      const updatedData = { ...req.body };
  
      // Se quantidade e valor_unitario forem fornecidos, calcula valor_total
      if (quantidade !== undefined && valor_unitario !== undefined) {
        updatedData.valor_total = quantidade * valor_unitario;
      }
  
      const updatedItem = await Item.update(updatedData, { where: { id } });
  
      if (updatedItem[0] === 0) {
        return res.status(404).json({ error: 'Item não encontrado' });
      }
  
      res.status(200).json({ message: 'Item atualizado com sucesso' });
    } catch (error) {
      console.error(error); // Adicione um console.log para depuração
      res.status(500).json({ error: 'Erro ao atualizar item' });
    }
  };
  

  exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.destroy({ where: { id } });
        if (deleted === 0) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        res.status(200).json({ message: 'Item excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir item' });
    }
};

exports.searchItems = async (req, res) => {
  try {
    const { nome, tipo, marca } = req.query;
    const whereClause = {};
    if (nome) whereClause.nome = nome;
    if (tipo) whereClause.tipo = tipo;
    if (marca) whereClause.marca = marca;

    const items = await Item.findAll({ where: whereClause });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens' });
  }
};
