const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports ={
  async perform(data) {
    token = bcrypt.hash(data.password, 10);
    await User.create({ email: data.email, password: token });
  }
};
