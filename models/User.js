const { model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});
