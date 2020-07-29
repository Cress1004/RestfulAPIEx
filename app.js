const express = require('express');     // import express

const app = express();

// MiddleWares
app.use('/posts', () => {
    console.log("Middle is running!");
})

// ROUTES
app.get('/', (req, res) => {
    res.send("We are on home!");
})

app.get('/posts', (req, res) => {
    res.send("We are on post!");
})

// How to we start listening to the server
app.listen(3000);
