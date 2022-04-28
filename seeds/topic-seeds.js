const { Topic } = require('../models');

const topicData = [
    {
        topic: 'HTML',
    },
    {
        topic: 'CSS',
    },
    {
        topic: 'JavaScript',
    },
    {
        topic: 'Node',
    },
    {
        topic: 'SQL',
    },
    {
        topic: 'ORM',
    },
    {
        topic: 'MVC',
    },
    {
        topic: 'React',
    },
];

const seedTopics = () => Topic.bulkCreate(topicData);

module.exports = seedTopics;