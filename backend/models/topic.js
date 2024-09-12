const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path to where your database.js is located
const Problem = require('./problem');

// Define the Topic model
const Topic = sequelize.define('Topic', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'topics', // Explicit table name if needed
  timestamps: true // Set to false if you don't want createdAt and updatedAt fields
});


module.exports = Topic;
