const { Topic } = require('../models');

const topicData = [
    {
        topic_name: 'Bootstrap',
    },
    {
        topic_name: 'CSS',
    },
    {
        topic_name: 'Express',
    },
    {
        topic_name: 'Git',
    },
    {
        topic_name: 'HTML',
    },
    {
        topic_name: 'JavaScript',
    },
    {
        topic_name: 'Jest',
    },
    {
        topic_name: 'jQuery',
    },
    {
        topic_name: 'MVC',
    },
    {
        topic_name: 'mySQL',
    },
    {
        topic_name: 'Node.js',
    },
    {
        topic_name: 'ORM',
    },
    {
        topic_name: 'React',
    },
];

const seedTopics = () => Topic.bulkCreate(topicData);

module.exports = seedTopics;