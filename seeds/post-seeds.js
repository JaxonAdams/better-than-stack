const { Post } = require('../models');

const postData = [
    {
        title: 'Test Post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fuga atque. Modi aperiam, sit assumenda, incidunt adipisci, qui perferendis molestias ipsa vel unde aliquid quos itaque pariatur corporis. Et, iusto!',
        post_url: 'https://www.google.com/search?q=celine+dion+songs&oq=celine+dion&aqs=chrome.0.69i59j46i433i512j0i433i512l2j0i512j0i67i433j0i512j0i433i512l2.1878j0j7&sourceid=chrome&ie=UTF-8',
        topic_id: 2,
        user_id: 1
    },
    {
        title: 'Learn JavaScript Fast!',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fuga atque. Modi aperiam, sit assumenda, incidunt adipisci, qui perferendis molestias ipsa vel unde aliquid quos itaque pariatur corporis. Et, iusto!',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        topic_id: 6,
        user_id: 2
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;