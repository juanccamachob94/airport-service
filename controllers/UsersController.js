const User = require('../models/user');

module.exports = {
  create: (req, res, next) => {
    User.create({ email: req.name, password: req.password })
      .then(resp => {
        res.send('create');
      })
      .catch(next);
  }
};
