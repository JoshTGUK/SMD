const express = require('express');
const router = express.Router();

router.post('/download', (req, res) => {
  res.json({ message: 'Media download endpoint' });
});

module.exports = router;
