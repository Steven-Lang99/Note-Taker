const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')

const api_routes = require('./Develop/routes/api_routes');



app.use(express.static(path.join(__dirname, "./Develop/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', api_routes)

app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
})

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "./Develop/public/index.html"))
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});