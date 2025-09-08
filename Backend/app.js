const dotenv = require('dotenv');
dotenv.config(); // This line loads environment variables from a .env file into process.env should be written at the first to prioratize cinfiguring dotenv at the beginning
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./database/db'); // Import the database connection function
const { connect } = require('mongoose');
const userRoutes = require('./routes/user.routes');

connectToDb();

app.use(cors()); // Enable CORS for all routes just while development  else cors for only given domain
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);

module.exports = app;