// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelizes Model class
class Post extends Model {}

// set up fields and rules to my model
Post.init(
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
    post_name: {
      //   * String.
      type: DataTypes.STRING,
      //   * Doesn't allow null values.
      allowNull: false,
    },
    post_body: {
      //   * String.
      type: DataTypes.STRING,
      //   * Doesn't allow null values.
      allowNull: false,
    },
    date: {
      //   * String.
      type: DataTypes.DATE,
      
      defaultValue: DataTypes.NOW,
    },
    // * `user_id`
    user_id: {
      type: DataTypes.INTEGER,
      //   * References the `User` model's `id`.
      references: {
        model: 'user',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
