console.log("test");

// changes arrow image to up or down when clicked
function flipArrow() {
    var dropbtn = document.querySelector("drop-btn");
    dropbtn.setAttribute("class", "rotated");
}

// shows the hidden answer section when arrow is clicked (maybe just add this to flipArrow?)
function unhideAnswer(){}

// close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".drop-btn")) {
    var dropdowns = document.getElementsByClassName("answer");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
