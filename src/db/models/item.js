"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Employee, {
        foreignKey: "id_employee",
      });
    }
  }
  Item.init(
    {
      value_1: DataTypes.STRING,
      value_2: DataTypes.STRING,
      photo: DataTypes.STRING,
      file: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
