const data = require('./data');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./config/database'); // Sequelize configuration file
const userRoutes = require('./routes/user.route');
// const Topic = require('./models/topic');
// const Problem = require('./models/problem');

const app = express();

// Middleware
app.use(cors('*'));
app.use(express.json()); // This enables parsing of JSON bodies in requests

const PORT = 5000;

app.get('/data', async (req,res)=>{
//   const topics = await Topic.findAll({
//     include: [
//         {
//             model: Problem, // Include the associated Problem model
//             as: 'Problem', // Assuming you've defined the relationship
//         },
//     ],
// });
    res.send(data);
})

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log("App is running on 5000");
})