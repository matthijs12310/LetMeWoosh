console.log("client-side running");
anus();
function anus() {
  fetch('/check')
  .then((response) => response.text())
  .then((data) => kanker(data));
};

  function kanker(data) {
    if (data == "true") {
      console.log("true");
    } else {
      console.log("false");
      anus();
    }
    
  };