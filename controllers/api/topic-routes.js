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

router.put('/:id', (req, res) => {
    Topic.update(
        {
            topic_name: req.body.topic_name,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbTopicData => {
            if (!dbTopicData) {
                res.status(404).json({ message: 'No topic found with this id' });
                return;
            }
            res.json(dbTopicData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Topic.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTopicData => {
            if (!dbTopicData) {
                res.status(404).json({ message: 'No topic found with this id' });
                return;
            }
            res.json(dbTopicData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;