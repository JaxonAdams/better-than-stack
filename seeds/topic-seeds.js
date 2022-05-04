const { Topic } = require('../models');

const topicData = [
    {
        topic_name: 'HTML',
    },
    {
        topic_name: 'CSS',
    },
    {
        topic_name: 'Bootstrap',
    },
    {
        topic_name: 'JavaScript',
    },
    {
        topic_name: 'Node.js',
    },
    {
        topic_name: 'Express',
    },
    {
        topic_name: 'mySQL',
    },
    // console.log('topics seeded')
];

const seedTopics = () => Topic.bulkCreate(topicData);

module.exports = seedTopics;