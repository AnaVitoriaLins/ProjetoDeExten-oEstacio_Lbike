const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.get('/', agendamentoController.getAllAgendamentos);
router.post('/', agendamentoController.createAgendamento);
router.put('/:id', agendamentoController.updateAgendamento);
router.delete('/:id', agendamentoController.deleteAgendamento);

module.exports = router;
