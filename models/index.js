const Post = require("./Post");
const User = require("./User");
const Comments = require("./Comments");


User.hasMany(Post,{
  foreignKey: {
    key: 'user_id',
  },
})

Post.belongsTo(User, {
  foreignKey: {
    key: 'user_id',
  },
});

Comments.belongsTo(User, {
  foreignKey: {
    key: 'user_id',
  },
});

Post.hasMany(Comments, {
  foreignKey: {
    key: 'post_id',
  },
});


module.exports = { User, Post, Comments };
