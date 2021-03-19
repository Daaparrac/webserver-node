const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//static content
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Daniel Parra',
        titulo: 'Learning Node'
    });
})

app.get('/generic', function(req, res) {
    res.render('generic', {
        nombre: 'Daniel Parra',
        titulo: 'Learning Node'
    });
})

app.get('/elements', function(req, res) {
    res.render('elements', {
        nombre: 'Daniel Parra',
        titulo: 'Learning Node'
    });
})
app.get('/hello-world', function(req, res) {
    res.send('Hello World')
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})