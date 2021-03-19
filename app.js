const express = require('express')
const app = express()
const port = 8080;

//static content
app.use(express.static('public'))

app.get('/generic', function(req, res) {
    res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', function(req, res) {
    res.sendFile(__dirname + '/public/elements.html')
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