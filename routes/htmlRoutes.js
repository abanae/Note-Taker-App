// Require Dependencies
const fs = require("fs");
const path = require('path');


const router = require('express').Router();

// Defines Routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});




module.exports = router;