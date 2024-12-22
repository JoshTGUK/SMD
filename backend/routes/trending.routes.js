const express = require('express');
const router = express.Router();

router.get('/topics', (req, res) => {
  res.json({ message: 'Trending topics endpoint' });
});

module.exports = router;
