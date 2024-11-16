const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Rotas para gerenciamento de itens
router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);
router.get('/search', itemController.searchItems);

module.exports = router;
