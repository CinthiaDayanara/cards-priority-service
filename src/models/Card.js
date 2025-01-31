const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Card = sequelize.define("Card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  list_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  priority: { 
    type: DataTypes.ENUM("low", "medium", "high"), 
    defaultValue: "medium"
  }
}, {
  timestamps: true
});

module.exports = Card;
