const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  // onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "SET NULL"
});

Blog.hasMany(Comment,{
  foreignKey: 'blog_id',
  onDelete: "SET NULL"
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "SET NULL"
})

module.exports = { User, Blog, Comment };
