const User = require('../models/user');

module.exports = {
  create: (req, res, next) => {
    User.findOne({ id: req.id })
      .then(resp => {
        res.send('create');
      })
      .catch(next);
  }
};
