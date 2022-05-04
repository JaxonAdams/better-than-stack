const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'A+, great project guys!!',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Wow this video was SUPER helpful, thank you for sharing!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Found this article, this should solve your issue! https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Flexbox Froggy is a life saver! https://flexboxfroggy.com/',
        user_id: 3,
        post_id: 4
    },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;