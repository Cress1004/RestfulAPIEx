const express = require('express');     // import express
const app = express();
const mongoose =  require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
//import the routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send("We are on home!");
})


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },   
    () => console.log("connected to DB")
);
/*
{ useNewUrlParser: true },      // to use the new parser
{ useUnifiedTopology: true },   // to use the new Server Discover and monitoring engine
*/

// How to we start listening to the server
app.listen(3000);
