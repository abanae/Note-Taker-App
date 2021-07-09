// Require Dependencies
const express = require('express');
const fs = require("fs");
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Initializing App
const app = express();

// Express setup
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use(htmlRoutes);
app.use(apiRoutes);

// Set up listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}..`));