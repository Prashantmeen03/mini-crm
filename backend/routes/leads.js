const express = require('express');
const router = express.Router();

const {
  addLead,
  getLeads,
  updateLead,
  deleteLead
} = require('../controllers/leadcontroller');

router.post('/', addLead);
router.get('/', getLeads);
router.put('/:id', updateLead);
router.delete('/:id', deleteLead);

module.exports = router;