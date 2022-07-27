const note_router = require('express').Router();
const fs = require('fs');
const path = require('path')
const db = path.join(__dirname, '../db/db.json')

function getNoteData() {
    return fs.promises.readFile(db, 'utf8')
        .then(data => JSON.parse(data));

}



note_router.get('/notes', (request, response) => {
    getNoteData()
        .then(note_data => {
            response.json(note_data);
        })
        .catch(err => console.log(err))
})







module.exports = note_router

