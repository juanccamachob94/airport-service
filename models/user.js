'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: { msg: 'El email es inválido' }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: 'La contraseña debe tener al menos 6 caracteres'
        },
        notEmpty: { msg: 'La contraseña no puede estar vacía' },
        notNull: { msg: 'La contraseña no puede ser nula' }
      }
    }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync());
      }
    },
    sequelize,
    modelName: 'User',
  });
  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  }
  return User;
};
