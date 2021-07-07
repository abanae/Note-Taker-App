// Require Dependencies
const express = require('express');
// const fs = require("fs");
// const path = require('path');

// Initializing App
const app = express();






// Define Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});



// Set up listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}..`));