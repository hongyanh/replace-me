var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var replaceScript = require("./script.js");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/replace', function(req, res) {
  console.log(req.body)
  var result = replaceScript.replaceText(req.body)
  console.log(result)
  res.json({ data: result})
})

var PORT = 5000;

app.listen(process.env.PORT || PORT);

console.log("Express app running on port " + PORT);

module.exports = app;