console.log('Client-side code running');
fetch('/clicked')
  .then((response) => response.text())
  .then((data) => jekkr(data));
const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log("click");
});

function jekkr(data){
  if (data == "Failed making directory somehow report this to me.") {
    console.log("Folder does not exist");
    document.getElementById("counter").innerHTML = "Folder does not exist"
  } else {
    console.log("Folder exist");
    document.getElementById("counter").innerHTML = "Folder exists"
  }
};