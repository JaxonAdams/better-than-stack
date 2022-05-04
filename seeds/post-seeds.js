const { Post } = require('../models');

const postData = [
    {
        title: 'Better Than Stack',
        body: 'Group Project 2 - When the odds feel stacked against you. Join a growing community of web developers that are learning together. Skip the complicated posts on Stack. Brush up on coding topics here!',
        post_url: 'https://github.com/JaxonAdams/better-than-stack',
        topic_id: 9,
        user_id: 1
    },
    {
        title: 'Learn JavaScript Fast!',
        body: 'Watch this video to learn JavaScript in 2 minutes!',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        topic_id: 6,
        user_id: 3
    },
    {
        title: 'Merge Issues',
        body: "I'm trying to merge changes from a feature branch to develop but I'm getting an issue, please help!!",
        topic_id: 4,
        user_id: 2
    },
    {
        title: 'Still kinda confused about flexbox',
        body: "I'm trying to vertically center contents with flexbox but can't remember how, any ideas?",
        post_url: 'https://github.com/lonny-v/run-buddy-22',
        topic_id: 2,
        user_id: 1
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;