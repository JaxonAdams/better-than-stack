const Comment = require('./comment');
const Post = require('./post');
const Topic = require('./topic');
const User = require('./user');
const PostTopic = require('./postTopic');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsToMany(Topic, {
    through: PostTopic,
    as: 'posts',
    foreignKey: 'post_id'
});

// Tags belongToMany Products (through ProductTag)
Topic.belongsToMany(Posts, {
    through: PostTopic,
    as: 'topics',
    foreignKey: 'topic_name'
});

module.exports = { User, Post, Topic, Comment, PostTopic };
