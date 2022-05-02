const { Post } = require('../models');

const postData = [
    {
        title: 'Test Post',
        post_url: 'https://www.google.com/search?q=celine+dion+songs&oq=celine+dion&aqs=chrome.0.69i59j46i433i512j0i433i512l2j0i512j0i67i433j0i512j0i433i512l2.1878j0j7&sourceid=chrome&ie=UTF-8',
        // topic_name: 'HTML',
        user_id: '1'
    },
    {
        title: 'Learn JavaScript Fast!',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        // topic_name: 'JavaScript',
        user_id: '2'
    },
    console.log("posts seeded")
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;