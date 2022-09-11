const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static('./static/'));
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.post("/clicked", function(req, res) {
  console.log("clicedkdk");
});

app.listen(port);
console.log('Server started at http://localhost:' + port);