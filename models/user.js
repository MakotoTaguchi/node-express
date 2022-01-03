'use strict';

const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    mail: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     name: DataTypes.STRING,
//     pass: DataTypes.STRING,
//     mail: DataTypes.STRING,
//     age: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };