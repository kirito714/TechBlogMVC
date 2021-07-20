const Post = require('./Post');
const User = require('./User');


User.hasMany(Post,{
    foreignKey: {
        key:"post_id",
        allowNull: false,
    },
})

Post.belongsTo(User,{
    foreignKey:{
        key: "user_id",
    },
})