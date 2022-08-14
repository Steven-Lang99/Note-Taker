const note_router = require('express').Router();
const fs = require('fs');
const path = require('path')
const uuid = require('uuid').v4
const db = path.join(__dirname, '../db/db.json')

//Function to get json data
function getNoteData() {
    return fs.promises.readFile(db, 'utf8')
        .then(data => JSON.parse(data));

}


// To get all note data from getNoteData function
note_router.get('/notes', (request, response) => {
    getNoteData()
        .then(note_data => {
            response.json(note_data);
        })
        .catch(err => console.log(err))
})

// To create the notes and add id to them so you can click on them and they show up in the main body.
note_router.post('/notes', (request, response) => {
    getNoteData()
        .then(note_data => {
            const note = request.body
            note.id = uuid().split(0, 1)


            note_data.push(note)


            fs.promises.writeFile(db, JSON.stringify(note_data))
                .then((err) => {


                })
                .catch(err => console.log(err));
            response.json(note)
        });

})




module.exports = note_router

