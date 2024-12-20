const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.get('/', funcionarioController.getAllFuncionarios);
router.post('/', funcionarioController.createFuncionario);
router.put('/:id', funcionarioController.updateFuncionario);
router.delete('/:id', funcionarioController.deleteFuncionario);

module.exports = router;
