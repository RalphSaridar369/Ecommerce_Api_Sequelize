'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.User)
      models.User.hasMany(Products)
    }
  }
  Products.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    userId: {
      type:DataTypes.INTEGER,
      // allowNull:false,
    },
    categoryId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};