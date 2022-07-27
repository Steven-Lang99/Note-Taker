const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')

const api_routes = require('./Develop/routes/api_routes');


//Share static/Browser Files
app.use(express.static(path.join(__dirname, "./Develop/public")));

// Attach client side form data to request.body object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//load routes
app.use('/api', api_routes)


//When program ran "/" for the html is ran then when the button is clicked then "/notes" is opened
app.get('/notes', (request, response) => {
    response.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
})

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "./Develop/public/index.html"))
})


//start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});