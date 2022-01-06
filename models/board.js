'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "利用者は必須です。"
        }
      }
    },
    message: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "メッセージは必須です。"
        }
      }
    }
  }, {});
  Board.associate = function (models) {
    Board.belongsTo(models.User);
  };
  return Board;
};
// const {
//   Model, DataTypes
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Board extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Board.init({
//     userId: DataTypes.INTEGER,
//     message: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Board',
//   });
//   return Board;
// };