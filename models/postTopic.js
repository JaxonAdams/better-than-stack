// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class PostTopic extends Model { }

// PostTopic.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         post_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "post",
//                 key: "id"
//             }
//         },
//         topic_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "topic",
//                 key: "id"
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'post_topic',
//     }
// );

// module.exports = PostTopic;
