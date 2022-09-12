const express = require("express");
const app = express();
const fs = require("fs");
const dir = './mc'
const PORT = 3000;

app.use(express.static('static'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/check', (req, res) => {
  if (fs.existsSync(dir)) {
    console.log('Directory exists!');
    res.send("true");
  } else {
    console.log('Directory not found.');
    res.send("false");
    fs.mkdirSync(dir);
    const { spawn } = require("child_process");
    const ls = spawn("bash", ["./script2.sh"]);
    ls.stdout.on("data", data => {
      console.log(`${data}`);
    });
    ls.stderr.on("data", data => {
      console.log(`${data}`);
    });
    ls.on('error', (error) => {
      console.log(`${error.message}`);
    });
    ls.on("close", code => {
      console.log(`child process exited with code ${code}`);
    });
  }
});

app.listen(PORT);
console.log("Listening on port " + PORT);
