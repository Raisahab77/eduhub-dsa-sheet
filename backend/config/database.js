const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Validate environment variables
if (!process.env.DATABASE_NAME || !process.env.DATABASE_USERNAME || !process.env.DATABASE_PASSWORD || !process.env.DATABASE_SCHEMA) {
  throw new Error('Missing required database environment variables.');
}

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres', 
  logging: false,
  schema: process.env.DATABASE_SCHEMA // Specify the schema (optional)
});

// Test database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return sequelize.sync({ force: false }); // Use alter: true if you want to update existing tables
  })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
