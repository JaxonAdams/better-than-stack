const Comment = require('./comment');
const Post = require('./post');
const Topic = require('./topic');
const User = require('./user');
const PostTopic = require('./postTopic');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsTo(Topic, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// Topic.belongsToMany(Post, {
//     foreignKey: 'topic_id'
// });

Topic.hasMany(Post, {
    foreignKey: 'post_id',
});
module.exports = { User, Post, Topic, Comment, PostTopic};
