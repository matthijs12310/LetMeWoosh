const express = require('express');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static('./static/'));
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get("/clicked", function(req, res) {
  const dir = './mc';
  if (fs.existsSync(dir)) {
    res.send("Folder Exists");
  } else {
    res.send("Failed making directory somehow report this to me.");
  }
});

app.listen(port);
console.log('Server started at http://localhost:' + port);