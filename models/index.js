const Post = require("./Post");
const User = require("./User");
const Comments = require("./comments");

User.hasMany(Post, {
  foreignKey: {
    key: "user_id",
    onDelete:"CASCADE"
  },
});

Post.belongsTo(User, {
  foreignKey: {
    key: "user_id"
  },
});

Comments.belongsTo(Post, {
  foreignKey: {
    key: "user_id",
  },
});

User.hasMany(Comments, {
  foreignKey: "user_id",
});

Post.hasMany(Comments, {
  foreignKey: {
    key: "post_id",
  },
});

module.exports = { User, Post, Comments };
