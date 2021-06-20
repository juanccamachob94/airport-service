const router = require('express').Router();

router.route('/').get((req, res) => {
  res.send('init');
});

module.exports = router;
