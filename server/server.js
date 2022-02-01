// MERN Backend
// 1. Create a new folder called server
// 2. Create a new file called server.js
// 3. Connect to MongoDB
// 4. Create a new folder called models
// 5. Create a route file for each model
// 6. Use our routes to connect to the models


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// to be able to use .env file
require('dotenv').config();

// use express
const app = express();

// initialize our port
const port = process.env.PORT || 5000;

// use cors and body parser
app.use(cors());
app.use(express.json());

// bring in your mongoose stuff
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// make our connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('We established a connection with MongoDB');
});

// use our routes made for our models
// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users')

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
