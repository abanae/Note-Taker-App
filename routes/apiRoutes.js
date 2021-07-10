// Require Dependencies
const fs = require("fs");
const path = require('path');
const router = require('express').Router();
const {v4: uuidv4, v4} = require('uuid');

// API GET route that reads db.json & returns JSON
router.get('/api/notes', (req, res) => {
    let data = fs.readFileSync('db/db.json');
    data = JSON.parse(data);
    res.json(data);
});

// API POST route that creates new note & saves it using uuid
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
});

// API DELETE route deletes a note with specific ID
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json');  
     data.splices(req.paramas.id, 1);
     updateDb();
     console.log('Deleted note' + req.params.id);
     res.json(data);
}); 




module.exports = router;