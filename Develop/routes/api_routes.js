const note_router = require('express').Router();
const fs = require('fs');
const path = require('path')
const uuid = require('uuid').v4
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


note_router.post('/notes', (request, response) => {
    getNoteData()
        .then(note_data => {
            const note = request.body
            note.id = uuid().split(0, 1)


            note_data.push(note)


            fs.promises.writeFile(db, JSON.stringify(note_data))
                .then((err) => {
                    console.log('todo updated')

                })
                .catch(err => console.log(err));
            response.json(note)
        });

})




module.exports = note_router

