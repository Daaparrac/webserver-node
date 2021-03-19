const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('home Page')
})

app.get('/hello-world', function(req, res) {
    res.send('Hello World')
})

app.listen(8080)