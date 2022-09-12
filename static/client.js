console.log("client-side running");

fetch('/check')
  .then((response) => response.text())
  .then((data) => console.log(data));