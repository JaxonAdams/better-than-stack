const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            'topic_id'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            // {
            //     model: Topic,
            //     attributes: ['id', 'topic_name']
            // }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            'topic_id'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            // {
            //     model: Topic,
            //     attributes: ['id', 'topic_name']
            // }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.body.user_id,
        // topic_id: req.body.topic_id,
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;