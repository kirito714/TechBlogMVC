// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize  model (table) by extending off Sequelizes Model class
class Comments extends Model {}

// set up fields and rules to my model
Comments.init(
  {
    //  id for post
    id: {
      //   * Integer.
      type: DataTypes.INTEGER,
      //    * Doesn't allow null values.
      allowNull: false,
      //   * Set as primary key.
      primaryKey: true,
      //   * Uses auto increment.
      autoIncrement: true,
    },

    comment_body: {
      //   * String.
      type: DataTypes.STRING,
      //   * Doesn't allow null values.
      allowNull: false,
    },
    date: {
      //   * String.
      type: DataTypes.DATE,
      //   * Doesn't allow null values.
      defaultValue: DataTypes.NOW,
    },
    // * `user_id`
    post_id: {
      type: DataTypes.INTEGER,
      //   * References the `User` model's `id`.
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
