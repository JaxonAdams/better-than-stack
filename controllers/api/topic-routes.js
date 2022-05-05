const router = require('express').Router();
const { Topic} = require('../../models');

// get all topics
router.get('/', (req, res) => {
    console.log('======================');
    Topic.findAll({
        attributes: [
            'id',
            'topic_name',
        ],
    })
        .then(dbTopicData => res.json(dbTopicData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Topic.create({
        topic_name: req.body.topic_name,
    })
        .then(dbTopicData => res.json(dbTopicData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;