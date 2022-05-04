const { User } = require('../models');

const userData = [
    {
        username: 'Lonny',
        email: 'lonny@lonny.com',
        password: 'password',
    },
    {
        username: 'Hollie',
        email: 'hollie@hollie.com',
        password: 'password',
    },
    {
        username: 'stephenwoosley',
        email: 'stephen@woosley.com',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;