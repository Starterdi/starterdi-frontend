const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.json({username: 'by'}));
router.get('/group', (req, res)=> res.json({username:'dev group'}));

module.exports = router;