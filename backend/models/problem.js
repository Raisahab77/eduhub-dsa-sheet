const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Topic = require('./topic');

const Problem = sequelize.define('Problem', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    youtube: {
        type: DataTypes.STRING,
        allowNull: true
    },
    leetcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    article: {
        type: DataTypes.STRING,
        allowNull: true
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topicId: {
        type: DataTypes.UUID,
        references: {
            model: Topic,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

// In your topic model
Topic.hasMany(Problem, { as: 'problems', foreignKey: 'topicId' });

// In your problem model
Problem.belongsTo(Topic, { foreignKey: 'topicId' });

module.exports = Problem;
