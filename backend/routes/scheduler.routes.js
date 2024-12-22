const express = require('express');
const router = express.Router();

router.post('/schedule', (req, res) => {
  res.json({ message: 'Schedule post endpoint' });
});

module.exports = router;
