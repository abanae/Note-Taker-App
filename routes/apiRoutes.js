const fs = require("fs");
const path = require('path');
const router = require('express').Router();
const {v4: uuidv4, v4} = require('uuid');


router.get('/api/notes', (req, res) => {
    let data = fs.readFileSync('db/db.json');
    data = JSON.parse(data);
    res.json(data);
});


router.post('/api/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: v4(),
    };
    let data = fs.readFileSync('db/db.json');
    data = JSON.parse(data);
    data.push(newNote);
    res.json(data);
    data = JSON.stringify(data);
    fs.writeFileSync('db/db.json', data);
})

module.exports = router;