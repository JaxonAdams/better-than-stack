const seedTopics = require('./topic-seeds');
const seedPosts = require('./post-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedTopics();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedPosts();
    console.log('\n----- PRODUCTS SEEDED -----\n');


    process.exit(0);
};

seedAll();
