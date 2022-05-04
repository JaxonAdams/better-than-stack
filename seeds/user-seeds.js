const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'Lonny',
        email: 'lonny@lonny.com',
        password: 'password',
    },
    {
        id: 2,
        username: 'Hollie',
        email: 'hollie@hollie.com',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;