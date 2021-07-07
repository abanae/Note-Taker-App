// Require Dependencies
const express = require("express");

// Initializing App
const app = express();
// const fs = require("fs");
// const path = require('path');




// Define Route
app.get('/', (req, res) => {
    resp.send('Hello World!');

});



// const PORT = 
// app.post('/', function(req, res) {
//     res.send('Hello Sir')
// })

// Set up listener
app.listen(3000, () => console.log('listening on PORT 3000...'));