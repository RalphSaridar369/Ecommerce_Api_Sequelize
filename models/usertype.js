'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany()
      UserType.hasMany(models.User)
      models.User.belongsTo(UserType)
    }
  }
  UserType.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserType',
  });

  return UserType;
};